
import { axiosInstance } from "../config/axios";
import { useQuiosco } from "./useQuiosco";
import useSWR from 'swr';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuth = ({ middleware, url }) => {

    const { setErrors } = useQuiosco() // * Extraemos la función para guardar los errores
    const authToken     = localStorage.getItem('AUTH_TOKEN'); // * Obtenemos el token del localStorage
    const navigate      = useNavigate(); // * Obtenemos la función para navegar entre rutas

    // ? Obtenemos el usuario usando SWR y Axios
    const { data:user, error, mutate:reloadUser } = useSWR('/api/user', () => 
        axiosInstance('/api/user', {
            headers: {
                Authorization: `Bearer ${ authToken }`
            }
        })
        .then( res => res.data )
        .catch( error => {
            throw Error( error?.response?.data?.message )
        })
    )

    useEffect(() => {
        if ( middleware === 'guest' && user && url ){
            navigate( url )
        }
        if ( middleware === 'auth' && error ){
            navigate( '/auth/login' )
        }
    }, [user, error])
    
    
    // TODO | Creamos la función para iniciar sesión
    const login = async ( datos ) => {
        try {
            const { data } = await axiosInstance.post('/api/login', datos);
            
            // ? Guardamos el token en el localStorage
            localStorage.setItem('AUTH_TOKEN', data.access_token);

            await reloadUser(); // * Actualizamos el usuario

            setErrors([]); // * Limpiamos los errores
        } catch (error) {
            setErrors( Object.values(error.response.data.errors) ); // * Guardamos los errores
        }
    }
    // TODO | Creamos la función para cerrar sesión
    const logout = async () => {
        try {
            await axiosInstance.post('/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${ authToken }`
                }
            });

            localStorage.removeItem('AUTH_TOKEN'); // * Eliminamos el token del localStorage
            await reloadUser(null); // * Actualizamos el usuario y lo ponemos en null para que no se pueda acceder a las rutas protegidas
        } catch (error) {
            throw Error( error?.response?.data?.message )
        }
    }
    // TODO | Creamos la función para registrar un usuario
    const register = async ( datos ) => {
        try {
            const { data } = await axiosInstance.post( "/api/register", datos );

            localStorage.setItem('AUTH_TOKEN', data.access_token); // * Guardamos el token en el localStorage
            
            await reloadUser(); // * Actualizamos el usuario
            setErrors([]); // * Limpiamos los errores

        } catch (error) {
            setErrors( Object.values( error.response.data.errors ) );
        }
    }

    // ? Devolvemos un objeto con las funciones
    return { 
        login, 
        logout, 
        register,
        user,
        error
    }
}

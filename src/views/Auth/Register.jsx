
import { Link } from "react-router-dom"
import { axiosInstance } from "../../config/axios";

import registerForm, { emailRef, nameRef, passwordConfirmationRef, passwordRef } from "../../data/register"

import { useQuiosco } from "../../hooks/useQuiosco";

export const Register = () => {

    const { errors, setErrors } = useQuiosco();

    // ! ----------------------------------------------------
    // ! Creamos el estado del formulario de registro
    // ! ----------------------------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        
        try {
            const response = await axiosInstance.post( "/api/register", datos );

            console.log( response );
        } catch (error) {
            setErrors( Object.values( error.response.data.errors ) );
        }
    }
        
    return (
        <>
            <h1 className="text-4xl font-black">
                Crea tu cuenta
            </h1>
            <p>Crea tu cuenta llenando el siguiente formulario</p>

            <form onSubmit={ handleSubmit } noValidate className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                {/* // ? Nombre completo */}
                {
                    registerForm.map((input, index) => (
                        <div className="mb-6" key={ index }>
                            <label htmlFor={ input.name } className="text-slate-600 font-semibold">
                                { input.label }:
                            </label>
                            <input type={ input.type } name={ input.name } id={ input.name } ref={ input.ref } placeholder={ input.placeholder } className="w-full p-2 bg-gray-50" />
                        </div>
                    ))
                }
                {/* // ? Botón para enviar el formulario */}
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 transition-colors text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">
                    Crear cuenta
                </button>
            </form>

            <nav className="mt-3 ml-2">
                <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    ¿Ya tienes una cuenta? Inicia sesión
                </Link>
            </nav>
        </>
    )
}


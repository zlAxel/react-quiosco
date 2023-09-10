
import { Link } from "react-router-dom"

import { loginForm } from "../../data/login"

export const Login = () => {

    return (
        <>
            <h1 className="text-4xl font-black">
                Inicia sesión
            </h1>
            <p>Para crear un pedido debes iniciar sesión</p>

            <form className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                {/* // ? Nombre completo */}
                {
                    loginForm.map((input, index) => (
                        <div className="mb-6" key={ index }>
                            <label htmlFor={ input.name } className="text-slate-600 font-semibold">
                                Nombre completo:
                            </label>
                            <input type={ input.type } name={ input.name } id={ input.name } placeholder={ input.placeholder } className="w-full p-2 bg-gray-50" />
                        </div>
                    ))
                }
                {/* // ? Botón para enviar el formulario */}
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 transition-colors text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">
                    Iniciar sesesión
                </button>
            </form>
            
            <nav className="mt-3 ml-2">
                <Link to="/auth/register" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    ¿No tienes una cuenta? Regístrate
                </Link>
            </nav>
        </>
    )
}


import { Link } from "react-router-dom"

import { registerForm } from "../../data/register"

export const Register = () => {
    return (
        <>
            <h1 className="text-4xl font-black">
                Crea tu cuenta
            </h1>
            <p>Crea tu cuenta llenando el siguiente formulario</p>

            <form className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                {/* // ? Nombre completo */}
                {
                    registerForm.map((input, index) => (
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


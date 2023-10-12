
import { createRef } from "react"

// ! ----------------------------------------------------
// ! Creamos los estados de los inputs del formulario del login
// ! ----------------------------------------------------

export const emailRef    = createRef();
export const passwordRef = createRef();

// ! ----------------------------------------------------
// ! Creamos los inputs del formulario del login
// ! ----------------------------------------------------

export const loginForm = [
    {
        name: "email",
        label: "Correo electrónico",
        placeholder: "Ingresa tu correo electrónico.",
        type: "email",
        ref: emailRef
    },
    {
        name: "password",
        label: "Contraseña",
        placeholder: "Ingresa tu contraseña.",
        type: "password",
        ref: passwordRef
    }
]

export default loginForm;

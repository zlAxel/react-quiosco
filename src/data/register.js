
import { createRef } from "react";

// ! ----------------------------------------------------
// ! Creamos los estados de los inputs del formulario de registro
// ! ----------------------------------------------------

export const nameRef                   = createRef();
export const emailRef                  = createRef();
export const passwordRef               = createRef();
export const passwordConfirmationRef   = createRef();

// ! ----------------------------------------------------
// ! Creamos los inputs del formulario de registro
// ! ----------------------------------------------------

export const registerForm = [
    {
        name: "name",
        label: "Nombre completo",
        placeholder: "Ingresa tu nombre completo.",
        type: "text",
        ref: nameRef
    },
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
    },
    {
        name: "password_confirmation",
        label: "Repite tu contraseña",
        placeholder: "Repite tu contraseña.",
        type: "password",
        ref: passwordConfirmationRef
    }
];

export default registerForm;

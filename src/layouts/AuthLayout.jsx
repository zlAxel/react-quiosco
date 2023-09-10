import { Outlet } from "react-router-dom"

import { Logo } from "../components/utility/Logo"

export const AuthLayout = () => {
    return (
        <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center gap-10">
            <Logo size="max-w-xs" />
            
            {/* // ! Sección para mostrar el contenido de las rutas hijas */}
            <section>
                <Outlet />    
            </section>
        </main>
    )
}


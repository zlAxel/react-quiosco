
import { Logo } from "./utility/Logo"

import { Category } from "./Category";
import { useQuiosco } from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";

export const Sidebar = () => {

    const { categories } = useQuiosco();
    const { logout, user }     = useAuth({
        'middleware': 'auth',
    });
    
    return (
        <aside className="md:w-72">
            <header className="p-4">
                <Logo size="w-40" />
            </header>

            <p className="my-10 text-xl text-center">
                Hola, <span className="font-bold">{ user?.name }</span>
            </p>

            <section className="mt-10">
                {
                    categories.map( category => (
                        <Category key={ category.id } category={ category } />
                    ))
                }
            </section>

            <footer className="my-5 py-5">
                <button type="button" onClick={ logout } className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">Cancelar orden</button>
            </footer>
        </aside>
    )
}

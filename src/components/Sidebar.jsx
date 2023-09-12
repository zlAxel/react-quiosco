
import { Logo } from "./utility/Logo"

import { Category } from "./Category";
import { useQuiosco } from "../hooks/useQuiosco";

export const Sidebar = () => {

    const { categories } = useQuiosco();
    
    return (
        <aside className="md:w-72">
            <header className="p-4">
                <Logo size="w-40" />
            </header>

            <section className="mt-10">
                {
                    categories.map( category => (
                        <Category key={ category.id } category={ category } />
                    ))
                }
            </section>

            <footer className="my-5 py-5">
                <button type="button" className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">Cancelar orden</button>
            </footer>
        </aside>
    )
}

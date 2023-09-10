
import { Logo } from "./utility/Logo"

import { categories } from "../data/categories";
import { Category } from "./Category";

export const Sidebar = () => {
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
                <button type="button" className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">Agregar gasto</button>
            </footer>
        </aside>
    )
}

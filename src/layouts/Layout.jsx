
import { Outlet } from "react-router-dom"

import { Sidebar } from "../components/Sidebar"
import { Summary } from "../components/Summary"

export const  Layout = () => {
    return (
        <div className="md:flex gap-10">
            <Sidebar />

            <main className="flex-1 h-screen overflow-y-scroll p-3">
                <Outlet />
            </main>

            <Summary />
        </div>
    )
}


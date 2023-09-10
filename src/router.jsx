
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { Layout } from "./layouts/Layout";
import { Index } from "./views/Index";
import { Login } from "./views/Auth/Login";
import { Register } from "./views/Auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index /> 
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

export default router; // ? Exportamos el router para usarlo en src\main.jsx

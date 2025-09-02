import { createBrowserRouter } from "react-router";
import MainLayout from './../Layout/MainLayout';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from './../pages/Register';

export const router = createBrowserRouter([
    {
        path:"/",
        Component : MainLayout,
        children : [
            {
                path:"/",
                Component : Home
            },
            {
                path: "/auth/login",
                Component : Login
            },{
                path:"/auth/Register",
                Component : Register
            }
        ]

    },{
        path:"/*",
        element : <h1>Error 404</h1>
    }
])
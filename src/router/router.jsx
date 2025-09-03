import { createBrowserRouter } from "react-router";
import MainLayout from './../Layout/MainLayout';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from './../pages/Register';
import DeshBoard from "../pages/Deshboard/DeshBoard";
import DeshboardLayout from "../pages/Deshboard/DeshboardLayout";
import PrivetRouter from "./PrivetRouter";
import Appointments from "../pages/Patient/Appointments";
import Error404 from "../Error404";
import AboutPage from "../pages/AboutPage/AboutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/auth/login",
                Component: Login
            }, {
                path: "/auth/Register",
                Component: Register
            },{
                path:"/aboutPage",
                Component : AboutPage
            }
        ]

    },
    {
        path: '/deshboard',
        element: <PrivetRouter>
            <DeshBoard></DeshBoard>
        </PrivetRouter>,
        children: [
            {
                path: "/deshboard",
                Component: DeshboardLayout
            },{
                path:'/deshboard/appoinment',
                Component : Appointments
            }
        ]
    }
    , {
        path: "/*",
        Component : Error404
    }
])
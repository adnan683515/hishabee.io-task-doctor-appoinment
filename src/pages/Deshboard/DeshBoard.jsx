// DeshBoard.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router";
import { Menu, X } from "lucide-react";
import AuthHook from "../../hooks/AuthHook";

const DeshBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { role } = AuthHook()

    return (
        <div className="flex h-screen bg-gray-100">

            <div
                className={`fixed md:relative z-20 top-0 left-0 h-full w-[70%] sm:w-1/5 bg-gray-900/80 backdrop-blur-md text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
                    <Link to={'/deshboard'}>
                        <h1 className="text-xl cursor-pointer font-bold text-indigo-400">DoctorApp</h1></Link>

            
                    <button
                        className="md:hidden p-1 hover:bg-gray-700 rounded"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="mt-6 flex flex-col gap-2 px-2">
                    <Link
                        to="/"
                        className="px-4 py-2 rounded hover:bg-indigo-600 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/dashboard/patients"
                        className="px-4 py-2 rounded hover:bg-indigo-600 transition"
                    >
                        Patients
                    </Link>
                    <Link
                        to="/dashboard/doctors"
                        className="px-4 py-2 rounded hover:bg-indigo-600 transition"
                    >
                        Doctors
                    </Link>
                    <Link
                        to="/deshboard/appoinment"
                        className="px-4 py-2 rounded hover:bg-indigo-600 transition"
                    >
                        Appointments
                    </Link>
                    <Link
                        to="/dashboard/settings"
                        className="px-4 py-2 rounded hover:bg-indigo-600 transition"
                    >
                        Settings
                    </Link>
                </nav>
            </div>


            <div className="flex-1 flex flex-col w-4/5 md:ml-1/5">

                <div className="flex items-center justify-between h-16 bg-white px-4 shadow-md">
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-200"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                    <h2 className="text-lg font-semibold text-indigo-600">Dashboard {role && role} </h2>
                </div>


                <div className="flex-1 p-4 w-full overflow-auto bg-gray-50">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DeshBoard;

import React from "react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="mt-10 w-full bg-gray-900/90 py-6 text-gray-300">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">

                <div className="text-center sm:text-left">
                    <h2 className="text-lg font-semibold text-white">MediBook</h2>
                    <p className="text-sm text-gray-400">Doctor Appointment Management</p>
                </div>


                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link to="/about" className="hover:text-indigo-400">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-indigo-400">
                        Contact
                    </Link>
                    <Link to="/privacy" className="hover:text-indigo-400">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-indigo-400">
                        Terms & Conditions
                    </Link>
                </div>


                <div className="text-center text-sm text-gray-400 sm:text-right">
                    © {new Date().getFullYear()} MediBook. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

import React from "react";
import { Link } from "react-router";

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 p-4">
            <h1 className="text-6xl sm:text-8xl font-extrabold text-indigo-700 mb-6">
                404
            </h1>
            <p className="text-xl sm:text-3xl text-indigo-600 mb-6 text-center">
                Oops! Page not found.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Error404;

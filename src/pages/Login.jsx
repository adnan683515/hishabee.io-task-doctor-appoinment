
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AxiosHookInstance } from "../hooks/AxiosHook";
import toast from "react-hot-toast";
import AuthHook from "../hooks/AuthHook";

export default function Login() {

    const axiosUrl = AxiosHookInstance()
    const [error, setErrror] = useState("")
    const navigate = useNavigate()
    const { setToken } = AuthHook()
    const [loginStart, setLoginStart] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoginStart(true)
        setErrror("")
        try {
            const result = await axiosUrl.post('/auth/login', data)
            console.log("logged in result", result?.data?.data?.user?.role)

            if (data?.role == result?.data?.data?.user?.role) {
                if (result?.data?.data?.token) {
                    setToken(result?.data?.data?.token)
                    localStorage.setItem('Token', result?.data?.data?.token)
                    localStorage.setItem("role", result?.data?.data?.user?.role)
                    toast.success("logged in successfully!")
                    navigate('/')
                }
            }
            else {
                setErrror("Your Role Doesn't Match!")
            }

        }
        catch (err) {
            setErrror(err.message)
        }
        finally {
            setLoginStart(false)
        }

    };

    return (
        <div className="flex    items-center justify-center my-20  px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Login to MediBook
                </h1>
                <p className="text-center text-rose-600"> {error ? error : ""} </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                    </div>


                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>


                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Login as
                        </label>
                        <select
                            {...register("role", { required: true })}
                            defaultValue="patient"
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        >
                            <option value="DOCTOR">DOCTOR </option>
                            <option value="PATIENT">PATIENT</option>
                        </select>
                    </div>


                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {loginStart  ? 'Login....' : 'Log in'}
                
                    </button>
                    <div className="mt-4 text-center text-sm text-gray-300 dark:text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/auth/Register"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

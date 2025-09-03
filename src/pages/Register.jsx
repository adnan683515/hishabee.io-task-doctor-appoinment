import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AxiosHookInstance } from "../hooks/AxiosHook";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Loader from './../components/Loader';

export default function Register() {
    const [tab, setTab] = useState("patient");
    const axiosUrl = AxiosHookInstance();
    const [registerStart,setRegisterStart] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const { data: doctorSpeshalist = [], isLoading } = useQuery({
        queryKey: 'all_spesalist',
        queryFn: (async () => {
            const result = await axiosUrl.get('/specializations')
            return result?.data?.data
        })
    })



    const onSubmit = async (data) => {
        setRegisterStart(true)
        try {
            const url =
                tab === "patient"
                    ? "/auth/register/patient"
                    : "/auth/register/doctor";
            const result = await axiosUrl.post(url, data);

            if (result?.data?.success) {

                toast.success(result.data.message);
                reset()
            } else {
                toast.error(result.data?.message || "Registration Error");
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Registration Failed");
        }
        finally{
            setRegisterStart(false)
        }
    };

    if (isLoading) {
        return <div>
            <Loader></Loader>
        </div>
    }
    return (
        <div className="flex my-10 relative overflow-hidden items-center justify-center px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                    Registration as {tab === "patient" ? "Patient" : "Doctor"}
                </h1>

                <div className="mb-6 flex rounded-xl bg-gray-100 p-1 dark:bg-gray-700">
                    <button
                        onClick={() => setTab("patient")}
                        className={`w-1/2 rounded-lg px-4 py-2 text-sm font-semibold transition ${tab === "patient"
                            ? "bg-indigo-600 text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                    >
                        Patient
                    </button>
                    <button
                        onClick={() => setTab("doctor")}
                        className={`w-1/2 rounded-lg px-4 py-2 text-sm font-semibold transition ${tab === "doctor"
                            ? "bg-indigo-600 text-white"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            }`}
                    >
                        Doctor
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                    </div>

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
                                minLength: { value: 6, message: "Minimum 6 characters" },
                            })}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    {tab === "doctor" && (
                        <div>
                            <label
                                htmlFor="specialization"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                            >
                                Select Specialization
                            </label>
                            <select
                                {...register("specialization", {
                                    required: "Specialization is required",
                                })}
                                id="specialization"
                                name="specialization"
                                className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            >
                                <option value="">Choose specialization</option>
                                {
                                    doctorSpeshalist?.map((item, index) => {
                                        return <option value={item} key={index} >{item}</option>
                                    })
                                }
                            </select>
                            {errors.specialization && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.specialization.message}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Photo URL (optional)
                        </label>
                        <input
                            type="url"
                            {...register("photo_url")}
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            placeholder="https://example.com/photo.jpg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        { registerStart ? 'Registration....' : 'Register' }
                    </button>

                    <div className="mt-4 text-center text-sm text-gray-300 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/auth/Login"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

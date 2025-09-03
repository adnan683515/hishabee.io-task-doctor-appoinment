import React, { useState } from "react";
import AuthHook from "../../hooks/AuthHook";
import { AxiosHookInstance } from "../../hooks/AxiosHook";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";


const DoctorDashboard = () => {
    const { token } = AuthHook();
    const axiosUrl = AxiosHookInstance();

    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["appointments", { status, date, page }],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (status) params.append("status", status);
            if (date) params.append("date", date);
            params.append("page", page);

            const res = await axiosUrl.get(`/appointments/doctor?${params.toString()}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            return res?.data;
        },
        keepPreviousData: true,
        enabled: !!token,
    });

    if (isLoading) return <Loader></Loader>;
    if (isError) return <p className="text-center text-red-500">Error fetching appointments</p>;

    const appointments = data?.data || [];

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold text-indigo-600 mb-4 md:mb-6">
                Doctor Dashboard
            </h1>

            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border rounded-lg p-2 text-xs md:text-sm focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex gap-1 md:gap-2 flex-wrap">
                    {["", "PENDING", "COMPLETED", "CANCELLED"].map((st, index) => (
                        <button
                            key={index}
                            onClick={() => setStatus(st)}
                            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-[12px] md:text-sm ${status === st
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 hover:bg-indigo-100"
                                }`}
                        >
                            {st === "" ? "All" : st.charAt(0).toUpperCase() + st.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {appointments.length > 0 ? (
                    appointments.map((appt, index) => (
                        <div
                            key={index}
                            className="border rounded-xl shadow-sm p-3 md:p-4 bg-white flex flex-col"
                        >
                            <h3 className="font-semibold text-[12px] md:text-lg text-indigo-700">
                                {appt.patient?.name || "Unknown Patient"}
                            </h3>
                            <p className="text-[12px] md:text-sm text-gray-600">Time: {appt.time}</p>
                            <p className="text-[12px] md:text-sm text-gray-600">Date: {appt.date}</p>
                            <span
                                className={`mt-2 px-2 py-1 rounded-full text-[10px] md:text-xs font-medium w-fit ${appt.status === "PENDING"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : appt.status === "COMPLETED"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {appt.status}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-[12px]">
                        No appointments found.
                    </p>
                )}
            </div>

            <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-6 flex-wrap">
                {[...Array(data?.totalPages || 1).keys()].map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p + 1)}
                        className={`px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[12px] md:text-sm ${page === p + 1
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-100 hover:bg-indigo-100"
                            }`}
                    >
                        {p + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DoctorDashboard;

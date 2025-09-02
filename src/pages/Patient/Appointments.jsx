import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../hooks/AuthHook";
import { AxiosHookInstance } from "../../hooks/AxiosHook";
import Loader from "../../components/Loader";

const Appointments = () => {
    const axiosUrl = AxiosHookInstance();
    const { token } = AuthHook();

    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalAppointments, setTotalAppointments] = useState(0);
    const [limit] = useState(10);

    const fetchAppointments = async ({ queryKey }) => {
        const [_key, page, status] = queryKey;
        const res = await axiosUrl.get(
            `/appointments/patient?page=${page}&limit=${limit}${status ? `&status=${status}` : ""}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setTotalAppointments(res?.data?.total);
        return res?.data;
    };

    const { data: appointmentsData = [], isLoading } = useQuery({
        queryKey: ["appointments", currentPage, statusFilter],
        queryFn: fetchAppointments,
        keepPreviousData: true,
    });

    if (isLoading) return <Loader />;

    const totalPages = Math.ceil(totalAppointments / limit);

    return (
        <div className="p-3 bg-gray-50 min-h-screen">
            <h1 className="text-xl sm:text-2xl font-bold mb-3">Patient Appointments</h1>

            <div className="flex flex-wrap gap-1 mb-3">
                {["", "PENDING", "COMPLETED", "CANCELLED"].map((status) => (
                    <button
                        key={status}
                        onClick={() => {
                            setStatusFilter(status);
                            setCurrentPage(1);
                        }}
                        className={`px-2 py-1 rounded text-xs sm:text-sm ${statusFilter === status
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        {status === "" ? "All" : status.charAt(0) + status.slice(1).toLowerCase()}
                    </button>
                ))}
            </div>

            {appointmentsData?.data?.length === 0 ? (
                <p className="text-gray-500 text-xs sm:text-sm">No appointments found</p>
            ) : (
                <div className="grid gap-2 sm:gap-4">
                    {appointmentsData?.data.map((appointment) => (
                        <div
                            key={appointment.id}
                            className="bg-white p-2 sm:p-4 rounded shadow flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold text-sm sm:text-base">
                                    {appointment.doctorName}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500">{appointment.date}</p>
                                <p className="text-xs sm:text-sm text-indigo-600">{appointment.status}</p>
                            </div>
                            <button className="px-2 py-1 sm:px-3 sm:py-2 bg-indigo-500 text-white text-xs sm:text-sm rounded hover:bg-indigo-600 transition">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex gap-1 sm:gap-2 justify-center mt-3">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-xs sm:text-sm rounded border disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-2 py-1 text-xs sm:text-sm rounded border ${currentPage === idx + 1 ? "bg-indigo-500 text-white" : ""
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-xs sm:text-sm rounded border disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Appointments;

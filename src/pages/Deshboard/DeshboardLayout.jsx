import React, { useState } from "react";
import { AxiosHookInstance } from "../../hooks/AxiosHook";
import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../hooks/AuthHook";
import Loader from "../../components/Loader";
import BookAppointment from "../Patient/BookAppointment";

const DeshboardLayout = () => {
    const axiosUrl = AxiosHookInstance();
    const { role } = AuthHook();
    const [totalDoc, setTotalDoc] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [isOpen, setIsOpen] = useState(false);
    const [doctorInfo, setDoctorInfo] = useState({});
    const [searchInput, setSearchInput] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [search, setSearch] = useState("");
    const [filterLocation, setFilterLocation] = useState("");

    function open(info) {
        setDoctorInfo(info);
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    const { data: all_spelist = [], isLoading: spelist_loading } = useQuery({
        queryKey: ["all_spe"],
        queryFn: async () => {
            const reslt = await axiosUrl.get("/specializations");
            return reslt?.data?.data;
        },
    });

    const fetchDoctors = async ({ queryKey }) => {
        const [_key, page, searchTerm, specialization] = queryKey;
        const res = await axiosUrl.get(
            `/doctors?page=${page}&limit=${limit}${searchTerm ? `&search=${searchTerm}` : ""
            }${specialization ? `&specialization=${specialization}` : ""}`
        );
        setTotalDoc(res?.data?.total);
        return res?.data;
    };

    const { data: doctorData = [], isLoading } = useQuery({
        queryKey: ["doctors", currentPage, search, filterLocation],
        enabled: role === "PATIENT",
        queryFn: fetchDoctors,
        keepPreviousData: true,
    });

    if (isLoading || spelist_loading) return <Loader />;

    const totalPages = Math.ceil(totalDoc / limit);

    const handleFilter = () => {
        setSearch(searchInput);
        setFilterLocation(selectedLocation);
        setCurrentPage(1);
    };

    if (role === "DOCTOR") {
        return (
            <div className="p-4 bg-gray-50 min-h-screen flex items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    Only patients can view doctors here.
                </h2>
            </div>
        );
    }

    return (
        <div className="p-2 md:p-4 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Doctors</h2>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3 mb-4 p-1 md:p-2">
                <div className="flex flex-col w-full md:w-1/3 gap-2">
                    <h2 className="hidden md:block text-sm md:text-base font-semibold">
                        Select Specialization
                    </h2>
                    <div className="flex gap-2">
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="flex-1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                        >
                            <option value="">Choose a specialization</option>
                            {all_spelist?.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={handleFilter}
                            className="bg-indigo-500 text-white px-3 md:px-4 py-2 rounded-md hover:bg-indigo-600 text-sm md:text-base transition"
                        >
                            Go
                        </button>
                    </div>
                </div>

                <div className="flex-1 rounded-lg bg-indigo-50 p-2 flex flex-col items-center gap-2">
                    <div className="bg-white w-full rounded-md p-2">
                        <div className="flex flex-col md:flex-row gap-2 w-full items-center">
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search by name..."
                                className="flex-1 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                            />
                            <button
                                onClick={handleFilter}
                                className="bg-indigo-600 text-white px-4 md:px-5 py-2 rounded-md hover:bg-indigo-700 transition text-sm md:text-base w-full md:w-32 mt-2 md:mt-0"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {doctorData?.data?.length === 0 ? (
                <p className="text-gray-500 text-sm md:text-base">No doctors available</p>
            ) : (
                <div className="grid gap-4 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {doctorData?.data.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="flex bg-white rounded-xl overflow-hidden hover:shadow-md transition"
                        >
                            <div className="w-1/3 bg-gray-100 flex items-center justify-center">
                                <img
                                    src={
                                        doctor?.photo_url && doctor.photo_url.trim() !== ""
                                            ? doctor.photo_url
                                            : "https://i.ibb.co/9H3xjLcG/71fcfd30-bd1d-489d-9d51-a6400fca6499.jpg"
                                    }
                                    alt={doctor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-2/3 p-3 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-800">{doctor.name}</h3>
                                    <p className="text-sm text-gray-500">{doctor.email}</p>
                                    <p className="mt-1 text-indigo-600 font-medium">{doctor.specialization}</p>
                                </div>
                                <button
                                    onClick={() => open(doctor)}
                                    className="mt-2 px-3 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition text-sm w-fit"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center mt-4 gap-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-sm border rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-2 py-1 text-sm border rounded ${currentPage === idx + 1 ? "bg-indigo-500 text-white" : "hover:bg-gray-200"
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-sm border rounded hover:bg-gray-200 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}

            {isOpen && <BookAppointment doctorInfo={doctorInfo} isOpen={isOpen} close={close} />}
        </div>
    );
};

export default DeshboardLayout;

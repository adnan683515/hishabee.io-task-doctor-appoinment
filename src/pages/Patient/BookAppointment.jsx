
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AxiosHookInstance } from "../../hooks/AxiosHook";
import AuthHook from "../../hooks/AuthHook";
import toast from "react-hot-toast";

const AppointmentModal = ({ isOpen, close, doctorInfo }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const axiosUrl = AxiosHookInstance()
    const { token } = AuthHook()

    const handleConfirm = async () => {
        try {
            const obj = { doctorId: doctorInfo?.id, date: selectedDate.toLocaleString() }

            const result = await axiosUrl.post('/appointments', obj, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if(result?.data?.statusCode == 201){
                toast.success("Appoinment Take Successfully!")
            }
            else{
                toast.error("Failed to take Appoinment")
            }

        }
        catch (err) {
            toast.error(err?.response?.data.message)
        }
        close();
    };

    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
        >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                        <DialogTitle
                            as="h3"
                            className="text-lg font-semibold text-indigo-600"
                        >
                            Book Your Appointment
                        </DialogTitle>


                        <div className="mt-4 w-full ">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                placeholderText=""
                                todayButton={null}
                                showPopperArrow={false}
                                className="w-full bg-indigo-50 rounded-md border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>


                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleConfirm}
                                className="rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Confirm
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default AppointmentModal;

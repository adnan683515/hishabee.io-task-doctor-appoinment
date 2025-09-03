import { Dialog } from "@headlessui/react";
import AuthHook from "../../hooks/AuthHook";
import { AxiosHookInstance } from "../../hooks/AxiosHook";

export const ActionModal = ({ isOpen, setIsOpen, ID, onSuccess, editStatus, refetch }) => {
    console.log("edity staus",editStatus)
    const { token } = AuthHook();
    const axiosUrl = AxiosHookInstance();

    const updateStatus = async (status) => {
        try {
            if (!ID) throw new Error("Appointment ID required");
            await axiosUrl.patch(
                "/appointments/update-status",
                { status, appointment_id: ID },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onSuccess?.();
            refetch?.();
            setIsOpen(false);
        } catch (error) {
            console.error(error?.response?.data || error.message);
        }
    };

    const allStatus = ["PENDING", "COMPLETED", "CANCELLED"];
    const availableStatus = allStatus.filter(
        (s) => s.toUpperCase() !== editStatus.toUpperCase()
    );

    return (
        <Dialog open={!!isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md space-y-4 bg-white rounded-lg shadow-lg p-6">
                    <Dialog.Title className="text-xl font-bold text-indigo-700">Update Appointment Status</Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-600">
                        Select an action for this appointment.
                    </Dialog.Description>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            {availableStatus.map((status, index) => (
                                <button
                                    key={index}
                                    onClick={() => updateStatus(status)}
                                    className={`flex-1 px-4 py-2 rounded-full text-white ${status === "COMPLETED"
                                        ? "bg-indigo-600 hover:bg-indigo-700"
                                        : status === "CANCELLED"
                                            ? "bg-red-600 hover:bg-red-700"
                                            : "bg-orange-500 hover:bg-orange-600"
                                        }`}
                                >
                                    {status.charAt(0) + status.slice(1).toLowerCase()}
                                </button>
                            ))}
                        </div>

                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-4 w-full px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        Close
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

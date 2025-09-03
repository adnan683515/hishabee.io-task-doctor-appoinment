import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const About = ({handleButtonClick}) => {


    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 min-h-[400px]">

                <div  data-aos="zoom-in-up" className="w-full lg:w-1/2 h-full flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
                        Our Doctor Appointment Support
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                        Our platform ensures smooth appointment management for doctors and patients alike.
                    </p>
                    <ul className="pl-2 space-y-3 text-gray-700">
                        {[
                            "Real-time appointment scheduling",
                            "Instant notifications for patients",
                            "Appointment reminders & follow-ups",
                            "Manage pending, completed, or cancelled appointments",
                            "Doctor availability tracking",
                            "Patient history & notes access",
                            "Secure data management",
                            "Quick rescheduling options"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <FiCheckCircle className="text-indigo-700 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        
                            <button onClick={handleButtonClick} className="mt-6 cursor-pointer bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                                Manage Appointments
                            </button>
                        
                    </div>
                </div>

                <div  data-aos="zoom-in-up" className="w-full lg:w-1/2 h-full lg:h-[400px]">
                    <img
                        src="https://i.ibb.co/bj6T2h4D/pexels-pavel-danilyuk-7108251.jpg"
                        alt="Doctor Support"
                        className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default About;

import React from "react";
import AuthHook from "../hooks/AuthHook";

const Contact = () => {
    const {contactRef} = AuthHook()
    
    return (
        <div ref={contactRef} className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row w-[96%] mx-auto gap-10 min-h-[500px]">

                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 sm:text-lg">
                        Need to schedule an appointment or have questions? Reach out to us and our team will respond promptly.
                    </p>
                    <ul className="pl-4 space-y-3 text-gray-700">
                        {[
                            "Quick appointment scheduling",
                            "Live status updates",
                            "Easy communication with doctors",
                            "Support available 24/7"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-indigo-700 mt-1 font-semibold">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg ">
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sections = [
        {
            title: "Our Mission",
            desc: "We aim to simplify the healthcare process by providing an easy-to-use platform where patients can book appointments, manage schedules, and connect with doctors seamlessly. Our mission is to reduce the time, cost, and complexity of healthcare by bridging the gap between patients and doctors in a secure and efficient way.",
            img: "https://i.ibb.co.com/4gSpdS6G/doctor-2568481-1280.jpg",
        },
        {
            title: "Doctor Management",
            desc: "Doctors can easily manage their schedules, view upcoming appointments, and keep track of patient histories with a few simple clicks. The platform provides an intuitive dashboard where they can approve, cancel, or reschedule appointments effortlessly. This helps doctors focus more on patient care instead of spending time on manual management tasks.",
            img: "https://i.ibb.co.com/PnYv3Mv/team-4529717-1280.jpg",
        },
        {
            title: "Patient Care",
            desc: "Patients can book appointments, view doctor availability, and receive reminders — ensuring timely care and stress-free medical experiences. With detailed doctor profiles, reviews, and availability slots, patients can make informed decisions about their healthcare. Our goal is to make healthcare accessible, transparent, and patient-friendly.",
            img: "https://i.ibb.co.com/ch6M9MgL/surgery-1822458-1280.jpg",
        },
        {
            title: "Healthcare Teamwork",
            desc: "Behind every successful treatment is a strong team of dedicated healthcare professionals. Our platform encourages collaboration between doctors, nurses, and patients to create a more efficient and supportive medical environment.",
            img: "https://i.ibb.co.com/kVtNSMk8/ai-generated-8775433-1280.png",
        },
        {
            title: "Secure & Reliable",
            desc: "We prioritize patient data security and reliability, ensuring all information is safely stored and protected with modern technologies. Our application is built with end-to-end encryption, strong authentication, and backup systems to guarantee data privacy. With 24/7 availability and robust cloud infrastructure, you can trust us with your healthcare needs.",
            img: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
        },
    ];

    return (
        <div className="sm:w-[95%] w-[98%] mx-auto py-10 relative overflow-hidden">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-700">
                About Our Application
            </h1>

            <div className="space-y-16">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                    
                        <div className="w-full md:w-1/2 h-[320px]">
                            <img
                                src={section.img}
                                alt={section.title}
                                className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-indigo-200"
                            />
                        </div>

                  
                        <div className="w-full md:w-1/2 h-[320px] flex items-center">
                            <div className="text-center md:text-left px-4">
                                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {section.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import vedio from './../vedio/ckUp.mp4';
import { Pagination, Navigation } from "swiper/modules";
import CounterUp from "../components/CounterUp";
import About from "../components/About";
import Contact from "../components/Contact";
import AuthHook from "../hooks/AuthHook";
import { useNavigate } from "react-router";
import Marquee from "react-fast-marquee";


export default function Home() {
    const { token  } = AuthHook();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (token) {
            navigate("/deshboard");
        } else {
            navigate("/auth/Login");
        }
    };

    return (
        <>
            <Swiper
                pagination={{ type: "progressbar" }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {[
                    {
                        img: "https://i.ibb.co.com/TD5hhHsM/pexels-carloscruz-artegrafia-172084181-11198235.jpg",
                        title: "Welcome to Nature",
                        desc: "Discover the beauty of nature and explore breathtaking landscapes with us."
                    },
                    {
                        img: "https://i.ibb.co.com/SDcXsmBg/pexels-algrey-9054999.jpg",
                        title: "Capture Every Moment",
                        desc: "Photography is the story we fail to put into words. Capture yours today."
                    },
                    {
                        img: "https://i.ibb.co.com/RTQS5qTd/pexels-pavel-danilyuk-7108248.jpg",
                        title: "Adventure Awaits",
                        desc: "Embrace the thrill of new adventures and create unforgettable memories."
                    },
                    {
                        img: "https://i.ibb.co.com/qLrTsjFG/pexels-rdne-6129494-1.jpg",
                        title: "Discover New Places",
                        desc: "Travel opens your heart, broadens your mind, and fills your life with stories."
                    }
                ].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                            <img
                                src={slide.img}
                                alt={`slide-${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center rounded-xl px-4">
                                <h2 className="text-2xl md:text-4xl font-bold mb-3">{slide.title}</h2>
                                <p className="max-w-xl text-sm md:text-base lg:text-lg mb-4">{slide.desc}</p>
                                <button
                                    onClick={handleButtonClick}
                                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="bg-gray-100 py-3 ">
                <Marquee className="w-[98%] mx-auto" pauseOnHover gradient={false} speed={60}>
                    <span className="text-indigo-700 font-semibold mx-6">
                        Book Your Doctor Appointment Easily
                    </span>
                    <span className="text-indigo-700 font-semibold mx-6">
                        Get Instant Notifications for Patients
                    </span>
                    <span className="text-indigo-700 font-semibold mx-6">
                        Manage Appointments Anytime, Anywhere
                    </span>
                    <span className="text-indigo-700 font-semibold mx-6">
                        Stay Updated with Reminders & Follow-ups
                    </span>
                    <span className="text-indigo-700 font-semibold mx-6">
                        Doctor & Patient Support at Your Fingertips
                    </span>
                </Marquee>
            </div>

            <About handleButtonClick={handleButtonClick} />

            <div className="bg-gray-50 py-16">
                <div className="flex relative overflow-hidden flex-col lg:flex-row w-[96%] mx-auto min-h-[400px] gap-6">
                    <div data-aos="zoom-in-left" className="w-full lg:w-1/2 h-full flex items-center justify-center">
                        <video
                            src={vedio}
                            controls
                            autoPlay={false}
                            loop={false}
                            className="w-full h-full object-cover rounded-lg max-h-[400px]"
                        />
                    </div>
                    <div data-aos="zoom-in-right" className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
                            Doctor & Patient Checkup
                        </h2>
                        <p className="text-gray-700 sm:text-lg">
                            Our platform ensures seamless doctor-patient checkups with real-time updates and notifications.
                        </p>
                        <ul className="pl-4 space-y-3 text-gray-700">
                            {[
                                "Quick appointment scheduling",
                                "Live status updates for each checkup",
                                "Notifications for upcoming appointments",
                                "Track patient progress over time",
                                "Easy communication with doctors",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-indigo-700 mt-1 font-semibold">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-indigo-700 font-semibold mt-4">
                            Checkup duration: 15-30 minutes per patient
                        </p>
                        <p className="text-indigo-700 font-semibold">
                            Status updates: Pending, Completed, Cancelled
                        </p>
                    </div>
                </div>
            </div>

            <CounterUp />

            <Contact />
        </>
    );
}

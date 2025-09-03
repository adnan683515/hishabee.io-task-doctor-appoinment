import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";


import { Pagination, Navigation } from "swiper/modules";

export default function Home() {
    return (
        <>
            <Swiper
                pagination={{ type: "progressbar" }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
        
                <SwiperSlide>
                    <div className="relative w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                        <img
                            src="https://i.ibb.co.com/TD5hhHsM/pexels-carloscruz-artegrafia-172084181-11198235.jpg"
                            alt="slide-1"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center rounded-xl px-4">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3">
                                Welcome to Nature
                            </h2>
                            <p className="max-w-xl text-sm md:text-base lg:text-lg mb-4">
                                Discover the beauty of nature and explore breathtaking landscapes
                                with us.
                            </p>
                            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

           
                <SwiperSlide>
                    <div className="relative w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                        <img
                            src="https://i.ibb.co.com/SDcXsmBg/pexels-algrey-9054999.jpg"
                            alt="slide-2"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center rounded-xl px-4">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3">
                                Capture Every Moment
                            </h2>
                            <p className="max-w-xl text-sm md:text-base lg:text-lg mb-4">
                                Photography is the story we fail to put into words. Capture yours today.
                            </p>
                            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

     
                <SwiperSlide>
                    <div className="relative w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                        <img
                            src="https://i.ibb.co.com/RTQS5qTd/pexels-pavel-danilyuk-7108248.jpg"
                            alt="slide-3"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center rounded-xl px-4">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3">
                                Adventure Awaits
                            </h2>
                            <p className="max-w-xl text-sm md:text-base lg:text-lg mb-4">
                                Embrace the thrill of new adventures and create unforgettable memories.
                            </p>
                            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

          
                <SwiperSlide>
                    <div className="relative w-full h-[55vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                        <img
                            src="https://i.ibb.co.com/qLrTsjFG/pexels-rdne-6129494-1.jpg"
                            alt="slide-4"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center rounded-xl px-4">
                            <h2 className="text-2xl md:text-4xl font-bold mb-3">
                                Discover New Places
                            </h2>
                            <p className="max-w-xl text-sm md:text-base lg:text-lg mb-4">
                                Travel opens your heart, broadens your mind, and fills your life with stories.
                            </p>
                            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

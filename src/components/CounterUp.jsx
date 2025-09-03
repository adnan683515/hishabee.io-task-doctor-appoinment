import React from "react";
import CountUp from "react-countup";

const CounterUp = () => {
    const counters = [
        {
            title: "Total Appointments",
            label: "All scheduled appointments",
            color: "bg-indigo-100",
            value: 1200,
        },
        {
            title: "Pending",
            label: "Appointments yet to complete",
            color: "bg-orange-100",
            value: 350,
        },
        {
            title: "Completed",
            label: "Successfully completed appointments",
            color: "bg-green-100",
            value: 750,
        },
        {
            title: "Cancelled",
            label: "Appointments that were cancelled",
            color: "bg-red-100",
            value: 100,
        },
    ];

    return (
        <div className="grid grid-cols-2 relative overflow-hidden sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 sm:mx-4 ">
            {counters.map((counter, index) => (
                <div
                    data-aos="fade-down-right"
                    key={index}
                    className={`${counter.color} text-black rounded-lg h-52 flex flex-col items-center justify-center p-6`}
                >
                    <p className="text-xl sm:text-2xl font-bold mb-3 text-center">
                        {counter.title}
                    </p>
                    <CountUp
                        start={0}
                        end={counter.value}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                        className="text-5xl sm:text-6xl font-extrabold text-center"
                    />
                    <p className="text-sm sm:text-base mt-3 text-center">
                        {counter.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CounterUp;

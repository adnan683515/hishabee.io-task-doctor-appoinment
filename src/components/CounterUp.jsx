import React from "react";
import CountUp from "react-countup";

const CounterUp = () => {
    const counters = [
        { title: "Total Appointments", label: "All scheduled appointments", color: "bg-indigo-100", value: 120 },
        { title: "Pending", label: "Appointments yet to complete", color: "bg-orange-100", value: 35 },
        { title: "Completed", label: "Successfully completed appointments", color: "bg-green-100", value: 75 },
        { title: "Cancelled", label: "Appointments that were cancelled", color: "bg-red-100", value: 10 },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
            {counters.map((counter, index) => (
                <div
                    key={index}
                    className={`${counter.color} text-black rounded-lg h-52 flex flex-col items-center justify-center p-6`}
                >
                    <p className="text-xl sm:text-2xl font-bold mb-3 text-center">{counter.title}</p>
                    <CountUp
                        end={counter.value}
                        duration={2}
                        className="text-5xl sm:text-6xl font-extrabold text-center"
                    />
                    <p className="text-sm sm:text-base mt-3 text-center">{counter.label}</p>
                </div>
            ))}
        </div>
    );
};

export default CounterUp;

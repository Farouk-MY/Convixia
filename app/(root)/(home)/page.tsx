"use client"
import { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  // State to store current time and date
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Function to update time and date
    const updateTime = () => {
      const now = new Date();
      
      const currentTime = now.toLocaleTimeString("en-TN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const currentDate = new Intl.DateTimeFormat("en-TN", {
        dateStyle: "full",
      }).format(now);

      setTime(currentTime);
      setDate(currentDate);
    };

    // Update time and date initially
    updateTime();

    // Set an interval to update the time every second
    const interval = setInterval(updateTime, 1000); // 1000ms = 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base">
            Upcoming meeting at : 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://eleventh-assignment-code-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  const tileContent = ({ date: tileDate, view }) => {
    if (view === "month") {
      const dayEvents = events.filter((ev) => {
        const eventDate = new Date(ev.date);
        return (
          eventDate.getFullYear() === tileDate.getFullYear() &&
          eventDate.getMonth() === tileDate.getMonth() &&
          eventDate.getDate() === tileDate.getDate()
        );
      });

      return dayEvents.map((ev) => (
        <div
          key={ev._id}
          onClick={() => navigate(`/detailsEvent/${ev._id}`)}
          className="flex items-center gap-1 mt-1 cursor-pointer hover:bg-blue-300 text-center rounded p-1"
        >
          <span className="text-xs text-blue-700 font-medium text-center">{ev.name}</span>
        </div>
      ));
    }
    return null;
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-20 p-4 rounded ">
      <h2 className="text-4xl font-medium mb-6 text-center dark:text-black">Event Calendar</h2>
      <div className="flex justify-center w-full">
        <Calendar onChange={setDate} value={date} tileContent={tileContent} className="w-full" />
      </div>
    </div>
  );
};

export default EventCalendar;

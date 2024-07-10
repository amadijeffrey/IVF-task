import React, { useState } from "react";
import "./style.scss";
import RightArrowIcon from "../../../assets/chevron-right.svg?react";
import LeftArrowIcon from "../../../assets/chevron-left.svg?react";

const Calendar = ({ events, handleSelect }) => {
  const today = new Date();
  const year = today.getFullYear();

  const [month, setMonth] = useState(today.getMonth());

  const isToday = (day) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfWeek = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const startDayOfWeek = getStartDayOfWeek(month, year);

  const renderDays = () => {
    const days = [];

    // Fill in empty days before the start of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = `${year}-${(month + 1)
        .toString()
        .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
      days.push(
        <div key={day} className="day">
          <div
            className={`w-[24px] h-[24px] flex justify-center items-center mb-[8px] text-sm font-medium ${
              isToday(day) ? "today" : ""
            }`}
          >
            {day}
          </div>
          {events.length > 0 && events
            .filter((event) => event.date === currentDate)
            .map((event, index) => (
              <div
                key={index}
                className="event"
                onClick={() => handleSelect(event)}
              >
                <p>{event.title}</p> <p>{event.time}</p>
              </div>
            ))}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="flex mb-[24px]">
        <div className="flex gap-x-[8px]">
          <div className="bg-white border border-[#d0d5dd] w-[28px] h-[28px] flex justify-center items-center cursor-pointer rounded-[4px]" onClick={() => setMonth(prev => prev - 1)}>
            <LeftArrowIcon />
          </div>
          <p className="font-bold text-lg">{monthNames[month]}</p>
          <div className="bg-white  border border-[#d0d5dd] w-[28px] h-[28px] flex justify-center items-center cursor-pointer rounded-[4px]" onClick={() => setMonth(prev => prev + 1)}>
            <RightArrowIcon />
          </div>
        </div>
      </div>
      <div id="calendar">
        <div className="month">
          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="days">{renderDays()}</div>
        </div>
      </div>
    </>
  );
};

export default Calendar;

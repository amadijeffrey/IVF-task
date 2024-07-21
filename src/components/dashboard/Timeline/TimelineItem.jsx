import React from "react";

const TimelineItem = ({ date, time, title, isCompleted, isLast }) => {
  return (
    <div className="flex items-start relative h-[67px]">
      <div className="flex flex-col items-center gap-y-[3px]">
        {isCompleted ? <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            isCompleted ? "bg-primary" : "bg-gray-300"
          }`}
        >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
        </div> :
        <div className="w-6 h-6 rounded-full p-[2px] border-[2px] border-[#6b5dd3] bg-white">
           <div className="bg-primary h-full w-full rounded-full"/>
        </div>
        }
        {!isLast && (
          <div
            className={`h-[37px] w-[2px] ${
              isCompleted ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">
          {date}, {time}
        </p>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

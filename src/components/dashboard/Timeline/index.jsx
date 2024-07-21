import React from 'react'
import TimelineItem from './TimelineItem';

    const events = [
      {
        date: "29 May, 2024",
        time: "12:13",
        title: "Fertilisation",
        isCompleted: true,
      },
      {
        date: "29 May, 2024",
        time: "3:13",
        title: "Incubating",
        isCompleted: true,
      },
      {
        date: "06 June, 2024",
        time: "9:13",
        title: "Embryo ready for transfer",
        isCompleted: false,
      },
    ];

const Timeline = () => {
    return (
        <div>
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          date={event.date}
          time={event.time}
          title={event.title}
          isCompleted={event.isCompleted}
          isLast={index === events.length - 1}
        />
      ))}
    </div>
    )
}

export default Timeline
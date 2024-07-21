import React from "react";

const notes = [
    {
        date: new Date().toLocaleDateString(),
        instruction: 'Take medication at the same time each day, do not skip doses.'
    },
    {
        date: new Date().toLocaleDateString(),
        instruction: 'Take medication at the same time each day, do not skip doses.'
    },
    {
        date: new Date().toLocaleDateString(),
        instruction: 'Take medication at the same time each day, do not skip doses.'
    },
    {
        date: new Date().toLocaleDateString(),
        instruction: 'Take medication at the same time each day, do not skip doses.'
    },
]

const Notes = () => {
    return (
     <div>
        {notes.map((note, idx) => {
            return <div className="bg-[#f7f7f7] p-[2px] flex flex-col gap-y-[8px]" key={idx}>
              <p className="text-xs text-secondary">{note.date}</p>
              <p className="text-base text-primary">{note.instruction}</p>
            </div>
        })}
     </div>
    )
}

export default Notes
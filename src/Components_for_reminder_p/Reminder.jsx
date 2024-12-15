import React, { useState, useEffect } from "react";
import "./Reminder.css";

const Reminder = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  const [reminder, setReminder] = useState(() => {
    const storedReminders = localStorage.getItem("reminders");
    return storedReminders ? JSON.parse(storedReminders) : [];
  });

  const [newReminder, setNewReminder] = useState("");

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminder));
  }, [reminder]);

  const handleInputChange = (e) => {
    setNewReminder(e.target.value);
  };

  const handleReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, reminderObj]);
      setNewReminder("");
    }
  };

  const handleDelete = (index) => {
    setReminder(reminder.filter((_, itemIndex) => itemIndex !== index));
  };
  const reminderObj = {
    text: newReminder,
    date: formattedDate,
  };
  console.log(reminder);
  return (
    <div className="container">
      <h2>Reminder App</h2>
      <div className="input-container">
        <input
          value={newReminder}
          onChange={handleInputChange}
          placeholder="Enter a reminder"
          type="text"
        />
        <button className="button1" onClick={handleReminder}>
          <span>Add Reminder </span>
        </button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder-list">
          {reminder.map((value, index) => (
            <li key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <p style={{color:' rgb(255, 6, 6)',fontSize:"12px"}}>{value.date}</p>
                <button className="dlt-btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-rmd">No Reminders Yet!</p>
      )}
    </div>
  );
};

export default Reminder;

import React, { useState, useEffect } from "react";
import "./Reminder.css";

const Reminder = () => {
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
      setReminder([...reminder, newReminder]);
      setNewReminder("");
    }
  };

  const handleDelete = (index) => {
    setReminder(reminder.filter((_, itemIndex) => itemIndex !== index));
  };

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
        <button onClick={handleReminder}>Add Reminder</button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder-list">
          {reminder.map((value, index) => (
            <li key={index}>
              {value}
              <button className="dlt-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reminders Yet!</p>
      )}
    </div>
  );
};

export default Reminder;

import React, { useState } from "react";
import "./Reminder.css";
const Reminder = () => {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState();

  const handleInputChange = (e) => {
    setNewReminder(e.target.value);
  };

  const handleReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, newReminder]);
      setNewReminder("");
    }
  };
  const handleDelte = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex != index));
  };
  return (
    <div className="container">
      <h2>Reminder App</h2>
      <div className="input-container">
        <input
          value={newReminder}
          onChange={handleInputChange}
          placeholder="Enter a reminder "
          type="text"
        />
        <button onClick={handleReminder}>Add Reminder</button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder-list">
          {reminder.map((value, index) => {
            return (
              <li key={index}>
                {value}
                <button className="dlt-btn" onClick={() => handleDelte(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>ooops No Reminders !!!</p>
      )}
    </div>
  );
};

export default Reminder;

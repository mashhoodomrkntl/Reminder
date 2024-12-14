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
    }
  };
  return (
    <div className="container">
      <h2>Reminder App</h2>
      <div className="input-container">
        <input
          onChange={handleInputChange}
          placeholder="Enter a reminder "
          type="text"
        />
        <button onClick={handleReminder}>Add Reminder</button>
        {reminder.map((value) => {
          console.log(value);
          <h1>{value}</h1>;
        })}
      </div>
    </div>
  );
};

export default Reminder;

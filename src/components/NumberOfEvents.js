import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, currentNOE, setErrorAlert }) => {
  const handleChange = (e) => {
    if ((e.target.value && isNaN(e.target.value)) || e.target.value < 0) {
      setErrorAlert("Only positive numbers are allowed");
    } else {
      setErrorAlert("");
      setCurrentNOE(e.target.value);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events-input"
        defaultValue={currentNOE}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;

import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, currentNOE }) => {
  const handleChange = (e) => {
    setCurrentNOE(e.target.value);
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

import React, { useState } from "react";

const NumberOfEvents = () => {
  const [eventNumber, setEventNumber] = useState(32);

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number-of-events-input"
        value={eventNumber}
        onChange={(e) => setEventNumber(e.target.value)}
      />
    </div>
  );
};

export default NumberOfEvents;

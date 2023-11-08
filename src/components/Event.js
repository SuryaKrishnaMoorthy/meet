import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h3 className="summary">{event.summary}</h3>
      <p>
        Created on:
        <span className="creation"> {event.created}</span>
      </p>
      <p>
        Location:
        <span className="location"> {event.location}</span>
      </p>
      {!showDetails && (
        <button className="show-details" onClick={() => setShowDetails(true)}>
          Show
        </button>
      )}
      {showDetails && (
        <>
          <p className="description">{event.description}</p>
          <button
            className="hide-details"
            onClick={() => setShowDetails(false)}
          >
            Hide
          </button>
        </>
      )}
    </li>
  );
};

export default Event;

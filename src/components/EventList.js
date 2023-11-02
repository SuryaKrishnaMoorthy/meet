import React from "react";
import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events && events.map((event) => <Event key={event.id} />)}
    </ul>
  );
};

export default EventList;

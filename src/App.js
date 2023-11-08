import React, { useEffect, useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import { getEvents } from "./api";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents);
    return allEvents;
  };
  return (
    <div className="App">
      <CitySearch />
      <EventList events={events} />
    </div>
  );
}

export default App;

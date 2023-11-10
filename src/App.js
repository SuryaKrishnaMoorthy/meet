import React, { useEffect, useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import { getEvents, extractLocations } from "./api";
import NumberOfEvents from "./components/NumberOfEvents";

function App() {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));

    return allEvents;
  };
  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
      <EventList events={events} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import { getEvents, extractLocations } from "./api";
import NumberOfEvents from "./components/NumberOfEvents";
import { InfoAlert, ErrorAlert } from "./components/Alert";

function App() {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState("32");
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  useEffect(() => {
    fetchEvents();
  }, [currentCity, currentNOE]);

  const fetchEvents = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));

    return allEvents;
  };

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <EventList events={events} />
    </div>
  );
}

export default App;

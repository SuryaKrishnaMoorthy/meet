import React from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
function App() {
  const events = [{ id: 1 }, { id: 2 }];
  return (
    <div className="App">
      <CitySearch />
      <EventList events={events} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

const CitySearch = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div id="city-search">
      <input
        type="text"
        placeholder="Search for a city"
        className="city"
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && <ul className="suggestions"></ul>}
    </div>
  );
};

export default CitySearch;

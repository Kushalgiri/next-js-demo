import { useState, useEffect, useRef } from "react";

const options = ["Option 1", "Option 2", "Option 3"];
const locations = [
  "London",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Leeds",
  "Glasgow",
  "Edinburgh",
  "Belfast",
  "Cardiff",
];

export default function Search() {
  const [optionQuery, setOptionQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showOptionDropdown, setShowOptionDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const optionRef = useRef(null);
  const locationRef = useRef(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowOptionDropdown(false);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (optionRef.current && !optionRef.current.contains(e.target)) {
      setShowOptionDropdown(false);
    }
    if (locationRef.current && !locationRef.current.contains(e.target)) {
      setShowLocationDropdown(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Selected option: ${selectedOption}, selected location: ${selectedLocation}`
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-box" ref={optionRef}>
        <input
          type="text"
          placeholder="Search for options..."
          value={selectedOption ? selectedOption : optionQuery}
          onClick={() => setShowOptionDropdown(true)}
          onChange={(e) => setOptionQuery(e.target.value)}
        />
        {showOptionDropdown && (
          <ul className="options-dropdown">
            {options
              .filter((option) =>
                option.toLowerCase().includes(optionQuery.toLowerCase())
              )
              .map((option) => (
                <li key={option} onClick={() => handleOptionChange(option)}>
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className="search-box" ref={locationRef}>
        <input
          type="text"
          placeholder="Search for cities and locations in the UK..."
          value={selectedLocation ? selectedLocation : locationQuery}
          onClick={() => setShowLocationDropdown(true)}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
        {showLocationDropdown && (
          <ul className="locations-dropdown">
            {locations
              .filter((location) =>
                location.toLowerCase().includes(locationQuery.toLowerCase())
              )
              .map((location) => (
                <li
                  key={location}
                  onClick={() => handleLocationChange(location)}
                >
                  {location}
                </li>
              ))}
          </ul>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}




// geo location api http://www.geonames.org/ 

// import { useState } from "react";

// function LocationSearch() {
//   const [locations, setLocations] = useState([]);
//   const [query, setQuery] = useState("");

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const endpointUrl = "http://api.geonames.org/searchJSON?";
//     const params = {
//       q: query,
//       country: "GB",
//       featureClass: "P",
//       maxRows: 10,
//       username: "your-geonames-username",
//     };
//     const requestUrl = `${endpointUrl}${new URLSearchParams(params)}`;
//     const response = await fetch(requestUrl);
//     const data = await response.json();
//     setLocations(data.geonames);
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <label htmlFor="location">Location:</label>
//       <input
//         type="text"
//         id="location"
//         placeholder="Search for a location"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Search</button>
//       {locations.length > 0 && (
//         <ul>
//           {locations.map((location) => (
//             <li key={location.geonameId}>{location.name}</li>
//           ))}
//         </ul>
//       )}
//     </form>
//   );
// }

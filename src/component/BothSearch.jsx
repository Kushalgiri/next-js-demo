import { useState, useEffect, useRef } from "react";
import axios from "axios";

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

 useEffect(() => {
   const fetchLocations = async () => {
     try {
       const response = await axios.get(
         "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
         {
           headers: {
             "x-rapidapi-key":
               "f797a9232cmsh67d494d89551d93p1ff453jsn77502ed0a8ac",
             "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
           },
         }
       );
      //  console.log("REsponse",response)
      //  setLocations(response.data.data.map((location) => location.name));
     } catch (error) {
       console.error(error);
     }
   };
   fetchLocations();
 }, []);



  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="search-box" ref={optionRef}>
        <input
          type="text"
          placeholder="Search for options..."
          value={selectedOption ? selectedOption : optionQuery}
          onClick={() => setShowOptionDropdown(true)}
          onChange={(e) => {
            setSelectedOption("");
            setOptionQuery(e.target.value);
          }}
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
          onChange={(e) => {
            setSelectedLocation("");
            setLocationQuery(e.target.value);
          }}
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



// const handleSubmit = (e) => {
//   e.preventDefault();
//   fetch('/api/your-endpoint', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ selectedOption, selectedLocation }),
//   })
//   .then(response => {
//     // handle success or failure response from the server
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// };

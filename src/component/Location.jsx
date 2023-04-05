import React, { useState, useEffect, useRef } from "react";

const locations = [
  { label: "London", value: "London" },
  { label: "Birmingham", value: "Birmingham" },
  { label: "Manchester", value: "Manchester" },
  { label: "Leeds", value: "Leeds" },
  { label: "Liverpool", value: "Liverpool" },
  { label: "Bristol", value: "Bristol" },
  { label: "Newcastle", value: "Newcastle" },
  { label: "Sunderland", value: "Sunderland" },
  { label: "Durham", value: "Durham" },
  { label: "York", value: "York" },
  { label: "Cambridge", value: "Cambridge" },
  { label: "Oxford", value: "Oxford" },
  { label: "Reading", value: "Reading" },
  { label: "Brighton", value: "Brighton" },
  { label: "Edinburgh", value: "Edinburgh" },
  { label: "Glasgow", value: "Glasgow" },
  { label: "Cardiff", value: "Cardiff" },
  { label: "Swansea", value: "Swansea" },
];

const LocationSearchField = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(locations);
  const [selectedOption, setSelectedOption] = useState(null);

  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = locations.filter((location) =>
      location.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleLocationClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option.label);
    setShowOptions(false);
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
    setShowOptions(false);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a UK city or district..."
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleLocationClick}
          ref={inputRef}
        />
        {showOptions && (
          <ul>
            {filteredOptions.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <button type="submit" disabled={!selectedOption}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationSearchField;

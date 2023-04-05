import React, { useState } from "react";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
];

const SearchField = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setShowOptions(true)}
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

export default SearchField;

import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

 const options = [
   { label: "Option 1", value: "Option 1" },
   { label: "Option 2", value: "Option 2" },
   { label: "Option 3", value: "Option 3" },
   { label: "Option 4", value: "Option 4" },
 ];

const MyForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    selectedOptions: [],
  });

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


     const handleMultiSelectChange = (selected) => {
       setFormData((prevFormData) => ({
         ...prevFormData,
         selectedOptions: selected,
       }));
     };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>Select options: </label>
        <MultiSelect
          options={options}
          value={formData.selectedOptions}
          onChange={handleMultiSelectChange}
          labelledBy="Select"
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
  
};

export default MyForm;



  // html: `
  //     <p>Name: ${formData.name}</p>
  //     <p>Email: ${formData.email}</p>
  //     <p>Company: ${formData.company}</p>
  //     <p>Selected options: ${formData.options.join(', ')}</p>
  //   `,
  // };

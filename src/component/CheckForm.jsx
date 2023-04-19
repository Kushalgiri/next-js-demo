import { useState } from "react";

function CheckForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    isStudent: "",
    hasPets: "",
    isEmployed: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Gender:
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleInputChange}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleInputChange}
        />
        Female
      </label>
      <br />
      <label>
        Are you a student?
        <br />
        <input
          type="radio"
          name="isStudent"
          value="yes"
          checked={formData.isStudent === "yes"}
          onChange={handleInputChange}
        />
        Yes
        <br />
        <input
          type="radio"
          name="isStudent"
          value="no"
          checked={formData.isStudent === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
      <br />
      <label>
        Do you have any pets?
        <br />
        <input
          type="radio"
          name="hasPets"
          value="yes"
          checked={formData.hasPets === "yes"}
          onChange={handleInputChange}
        />
        Yes
        <br />
        <input
          type="radio"
          name="hasPets"
          value="no"
          checked={formData.hasPets === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
      <br />
      <label>
        Are you currently employed?
        <br />
        <input
          type="radio"
          name="isEmployed"
          value="yes"
          checked={formData.isEmployed === "yes"}
          onChange={handleInputChange}
        />
        Yes
        <br />
        <input
          type="radio"
          name="isEmployed"
          value="no"
          checked={formData.isEmployed === "no"}
          onChange={handleInputChange}
        />
        No
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckForm;

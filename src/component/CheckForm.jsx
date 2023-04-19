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

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
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
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.email) errors.email = "Email is required.";
    if (!data.gender) errors.gender = "Gender is required.";
    if (!data.isStudent) errors.isStudent = "This field is required.";
    if (!data.hasPets) errors.hasPets = "This field is required.";
    if (!data.isEmployed) errors.isEmployed = "This field is required.";
    return errors;
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
          required
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
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
          required
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleInputChange}
          required
        />
        Female
        {errors.gender && <span style={{ color: "red" }}>{errors.gender}</span>}
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
          required
        />
        Yes
        <br />
        <input
          type="radio"
          name="isStudent"
          value="no"
          checked={formData.isStudent === "no"}
          onChange={handleInputChange}
          required
        />
        No
        {errors.isStudent && (
          <span style={{ color: "red" }}>{errors.isStudent}</span>
        )}
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
          required
        />
        Yes
        <input
          type="radio"
          name="hasPets"
          value="no"
          checked={formData.hasPets === "no"}
          onChange={handleInputChange}
          required
        />
        No
        {errors.hasPets && (
          <span style={{ color: "red" }}>{errors.hasPets}</span>
        )}
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
          required
        />
        Yes
        <br />
        <input
          type="radio"
          name="isEmployed"
          value="no"
          checked={formData.isEmployed === "no"}
          onChange={handleInputChange}
          required
        />
        No
        {errors.isEmployed && (
          <span style={{ color: "red" }}>{errors.isEmployed}</span>
        )}
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CheckForm;




// without vallidation 



// import { useState } from "react";

// function CheckForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     isStudent: "",
//     hasPets: "",
//     isEmployed: "",
//   });

//   const handleInputChange = (e) => {
//     const value = e.target.value.trim();
//     setFormData({ ...formData, [e.target.name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await fetch("/api/submit-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Gender:
//         <br />
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           checked={formData.gender === "male"}
//           onChange={handleInputChange}
//         />
//         Male
//         <br />
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           checked={formData.gender === "female"}
//           onChange={handleInputChange}
//         />
//         Female
//       </label>
//       <br />
//       <label>
//         Are you a student?
//         <br />
//         <input
//           type="radio"
//           name="isStudent"
//           value="yes"
//           checked={formData.isStudent === "yes"}
//           onChange={handleInputChange}
//         />
//         Yes
//         <br />
//         <input
//           type="radio"
//           name="isStudent"
//           value="no"
//           checked={formData.isStudent === "no"}
//           onChange={handleInputChange}
//         />
//         No
//       </label>
//       <br />
//       <label>
//         Do you have any pets?
//         <br />
//         <input
//           type="radio"
//           name="hasPets"
//           value="yes"
//           checked={formData.hasPets === "yes"}
//           onChange={handleInputChange}
//         />
//         Yes
//         <br />
//         <input
//           type="radio"
//           name="hasPets"
//           value="no"
//           checked={formData.hasPets === "no"}
//           onChange={handleInputChange}
//         />
//         No
//       </label>
//       <br />
//       <label>
//         Are you currently employed?
//         <br />
//         <input
//           type="radio"
//           name="isEmployed"
//           value="yes"
//           checked={formData.isEmployed === "yes"}
//           onChange={handleInputChange}
//         />
//         Yes
//         <br />
//         <input
//           type="radio"
//           name="isEmployed"
//           value="no"
//           checked={formData.isEmployed === "no"}
//           onChange={handleInputChange}
//         />
//         No
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default CheckForm;

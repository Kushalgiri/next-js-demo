import { useState } from "react";

export default function HtrForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [cv, setCv] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled in
    if (!fullName || !email || !jobTitle || !location || !cv) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Send form data to API endpoint
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("jobTitle", jobTitle);
    formData.append("location", location);
    formData.append("cv", cv);

    // Log the form data to the console
    for (let [key, value] of formData.entries()) {
      console.log(key + ": " + value);
    }

    // Call API endpoint here to send the form data
  };

  const handleFileUpload = (event) => {
    setCv(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}

      <label htmlFor="fullName">Full Name*</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label htmlFor="email">Email*</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="jobTitle">Job Title*</label>
      <select
        id="jobTitle"
        name="jobTitle"
        required
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      >
        <option value="" selected disabled>
          Select job title
        </option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>

      <label htmlFor="location">Location*</label>
      <select
        id="location"
        name="location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="" selected disabled>
          Select location
        </option>
        <option value="Location 1">Location 1</option>
        <option value="Location 2">Location 2</option>
        <option value="Location 3">Location 3</option>
      </select>

      <label htmlFor="cv">Upload CV*</label>
      <input
        type="file"
        id="cv"
        name="cv"
        accept=".pdf,.doc,.docx"
        required
        onChange={handleFileUpload}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

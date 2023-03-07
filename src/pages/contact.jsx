// import React, {useState} from "react";
// import Image from "next/image";
// import image from "@/assets/images/project-1.jpg";
// import ReCAPTCHA from "react-google-recaptcha";

// const contact = () => {
//   const [formStatus, setFormStatus] = useState("Send");
// const [formData, setFormData] = useState({});
// const [captchaToken, setCaptchaToken] = useState(null);

//   const onSubmit = (e) => {
//     e.preventDefault();

//      if (!captchaToken) {
//        console.log("Please verify you are human");
//        return;
//      }

//     setFormStatus("Submitting...");
//     const { name, email, message } = e.target.elements;
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     console.log(conFom);
//   };

//   const handleCaptchaChange = (token) => {
//     setCaptchaToken(token);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <h2 className="mb-3">How Can We Help Your Business To Grow?</h2>
//           <form onSubmit={onSubmit}>
//             <div className="mb-3">
//               <label className="form-label" htmlFor="name">
//                 Name
//               </label>
//               <input className="form-control" type="text" id="name" required />
//             </div>
//             <div className="mb-3">
//               <label className="form-label" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 className="form-control"
//                 type="email"
//                 id="email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label" htmlFor="message">
//                 Message
//               </label>
//               <textarea className="form-control" id="message" required />
//             </div>
//             <ReCAPTCHA
//               sitekey="6LcXbNwkAAAAAFtbS1S4YB4yRA81WjH0XKcvX4gq"
//               onChange={handleCaptchaChange}
//             />
//             <button className="btn btn-danger" type="submit">
//               {formStatus}
//             </button>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <Image src={image} alt="image" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default contact;






// ======================================== 

// With ReCAPTCHA 


// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// const contact = () => {
//   const [formData, setFormData] = useState({});
//   const [captchaToken, setCaptchaToken] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!captchaToken) {
//       console.log("Please verify you are human");
//       return;
//     }
    // submit form with captcha token
  // };

//   const handleCaptchaChange = (token) => {
//     setCaptchaToken(token);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//       </label>
//       <ReCAPTCHA
//         sitekey="6LfrdNwkAAAAAFhsGNTt0CIDEQhum0tQTxHLlfj9"
//         onChange={handleCaptchaChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default contact;



// =================================== Email send =============== 
import { useState } from "react";

export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to API endpoint
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      // Update submit message
      setSubmitMessage(data.message);
    } catch (error) {
      // Log error message
      console.error(error);
      setSubmitMessage("Error submitting form. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {submitMessage && <p>{submitMessage}</p>}
    </form>
  );
}



import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitForm = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div>
      <h1>Step {step}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={
          step === 1 ? validationSchema.slice(0, 1) : validationSchema
        }
        onSubmit={submitForm}
      >
        {({ errors, touched }) => (
          <Form>
            {step === 1 && (
              <>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                {errors.name && touched.name && <div>{errors.name}</div>}
              </>
            )}
            {step === 2 && (
              <>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
              </>
            )}
            {step > 1 && (
              <button type="button" onClick={prevStep}>
                Previous
              </button>
            )}
            {step < 2 && (errors.name || errors.email || errors.password) && (
              <div>Please fill all the fields before moving to next step</div>
            )}
            {step < 2 && (
              <button type="submit" onClick={() => nextStep()}>
                Next
              </button>
            )}
            {step === 2 && (
              <button type="submit" onClick={() => submitForm()}>
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;

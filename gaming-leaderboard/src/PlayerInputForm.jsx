import {  Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./PlayerInputForm.css";

const PlayerInputForm = ({addPlayer}) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name.trim() || !score.trim()){
      alert("Please enter a valid name and score.");
      return;
    }

    const newPlayer = {
      name: name.trim(),
      score: parseInt(score, 10),
    }
    addPlayer(newPlayer); //Call the function passed down as a prop

    //clear the form
    setName("");
    setScore("");
  };
  //Validation schema for yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(8, "Name must be at least 8 characters")
      .max(30, "Name cannot exceed 30 characters")
      .required("Player name is required"),
    score: Yup.number()
      .typeError("Score must be a number")
      .min(0, "Score must be at least 0")
      .required("Score is required"),
  });

  return(
    <Formik
    initialValues={{ name: "", score: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      // Add player to the leaderboard
      addPlayer({ id: Date.now(), name: values.name, score: Number(values.score) });
      resetForm(); // Clear the form after submission
    }}
  >
    {({ isSubmitting }) => (
      <Form className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Player Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter player name"
          />
          <ErrorMessage name="name" component="p" className="error-message" />
        </div>
        <div className="form-group">
          <label htmlFor="score" className="form-label">Score</label>
          <Field
            type="text"
            id="score"
            name="score"
            className="form-input"
            placeholder="Enter score"
          />
          <ErrorMessage name="score" component="p" className="error-message" />
        </div>
        <button type="submit" className="form-button" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Player"}
        </button>
      </Form>
    )}
  </Formik>
  );
}

export default PlayerInputForm;

  


import React, { useState } from "react";
import { Button, Box, Stack, TextField, Radio } from "@mui/material";

function Form({ setShowForm, handleData, handleEdit }:any) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    const newQuestion = { question, answers, correctAnswerIndex };
    handleData(newQuestion);
    handleEdit(newQuestion);
    setQuestion("");
    setAnswers(["", ""]);
    setShowForm(false);
    setCorrectAnswerIndex(null);
  };

  const handleAnswerChange = (index:any, value:any) => {
    console.log(index, value);
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleCorrectAnswerChange = (index:any) => {
    setCorrectAnswerIndex(index);
  };

  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <TextField
          sx={{ flex: 1 }}
          label="Question"
          variant="standard"
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </Stack>
      <br />

      {answers.map((answer, index) => (
        <Box key={index}>
          <Stack direction="row">
            <Radio
              size="small"
              id={`correctAnswer${index}`}
              name="correctAnswer"
              value={index}
              checked={correctAnswerIndex === index}
              onChange={() => handleCorrectAnswerChange(index)}
              required
            />
            <TextField
              sx={{ flex: 1 }}
              label={`Answer ${index + 1}`}
              variant="standard"
              type="text"
              id={`answer${index}`}
              name="answer[]"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
          </Stack>

          {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}

          <br />
        </Box>
      ))}
      <Box display="flex" justifyContent="center" gap={2}>
        {answers.length < 4 && (
          <Button variant="outlined" color="primary" onClick={addAnswer}>
            Add Answer
          </Button>
        )}
        <Button variant="contained" type="submit" color="success">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default Form;

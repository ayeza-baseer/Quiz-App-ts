import React, { useState } from "react";
import { Button, Box, Stack, TextField, Radio } from "@mui/material";
function Question({ question, questions, index, setQuestions }:any) {
  const [question1, setQuestion] = useState(question);

  //    const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormData((prevState) => ({ ...prevState, [name]: value }));
  //   };

  const handleInputBlur = () => {
    console.log(question1, index);
    let copyArray = [...questions];
    copyArray[index].question = question1;
    console.log(copyArray);
    setQuestions(copyArray);
  };

  return (
    <Box display="flex" width="100%">
      <TextField
        sx={{ flex: 1 }}
        label="Question"
        variant="standard"
        type="text"
        id="question"
        name="question"
        value={question1}
        onChange={(e) => setQuestion(e.target.value)}
        onBlur={handleInputBlur}
      />
    </Box>
  );
}

export default Question;

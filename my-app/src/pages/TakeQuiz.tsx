import React, { useState } from "react";
import Question from "../components/Question";
import Result from "../components/Result";
import { Box, Stack, TextField, Radio, Typography } from "@mui/material";
function TakeQuiz({ questions }: any) {
  const [answerIndex, setAnswerIndex] = useState(null);
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log(questions, "takeQuiz");

  console.log(questions[index], "takeQuizQuestion");
  const { question, answers, correctAnswerIndex } = questions[index];

  const handleCorrectAnswerChange = (indexAnswer: any) => {
    setAnswerIndex(indexAnswer);
    console.log(questions.length, index + 1);

    if (indexAnswer != correctAnswerIndex) {
      setAnswerIndex(null);
    }

    if (indexAnswer == correctAnswerIndex) {
      setCorrectAnswers(correctAnswers + 1);
      setAnswerIndex(null);
      console.log("correct");
    }
    if (questions.length != index + 1) setIndex(index + 1);
    else if (questions.length == index + 1) {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <>
        <Result
          correctAnswers={correctAnswers}
          questionsLength={questions.length}
        />
      </>
    );
  } else {
    return (
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        alignItems="center"
        height="100vh"
      >
        <Box
          bgcolor="white"
          width="50%"
          sx={{
            py: 4,
            px: 6,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5">
            Quiz
          </Typography>

          <TextField
            sx={{ flex: 1 }}
            label="Question"
            variant="standard"
            type="text"
            id="question"
            name="question"
            value={question}
          />

          <br />
          {answers.map((answer: any, index: any) => (
            <Box key={index}>
              <Stack direction="row">
                <Radio
                  size="small"
                  id={`correctAnswer${index}`}
                  name="correctAnswer"
                  value={index}
                  checked={answerIndex === index}
                  onChange={() => handleCorrectAnswerChange(index)}
                  required
                />
                <TextField
                  sx={{ flex: 1 }}
                  label={`Answer ${index + 1}`}
                  variant="standard"
                  disabled={true}
                  className="input-text"
                  type="text"
                  id={`answer${index}`}
                  name="answer[]"
                  value={answer}
                />
              </Stack>
              <br />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}

export default TakeQuiz;

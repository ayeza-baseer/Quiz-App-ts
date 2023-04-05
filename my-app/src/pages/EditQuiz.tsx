import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Button,
  Box,
  Stack,
  TextField,
  Radio,
  Paper,
  Snackbar,
} from "@mui/material";
import Question from "../components/Question";

import Form from "../components/Form";

function EditQuiz({ questions, handleData, setQuestions }: any) {
  const [questionsEdit, setQuestionsEdit] = useState(questions);
  console.log(questionsEdit, "questionsEdit");
  const [answerEdit, setAnswerEdit] = useState();

  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (indexQuestion: any) => {
    if (questionsEdit[indexQuestion].answers.length < 2) {
      return alert("Please add more answers");
    } else {
      console.log(questionsEdit, "submit");
      setQuestions(questionsEdit);
      alert("successfully edited");
    }
  };
  const toggleForm = () => {
    setShowForm(true);
  };

  const handleEdit = (data: any) => {
    setQuestionsEdit([...questionsEdit, data]);
  };
  const handleAnswerChange = (
    indexQuestion: any,
    indexAnswer: any,
    value: any
  ) => {
    let copyArray = [...questionsEdit];
    let question = copyArray.find((question, index) => index == indexQuestion);

    question.answers[indexAnswer] = value;

    setQuestionsEdit(copyArray);
  };

  const removeAnswer = (indexAnswer: any, indexQuestion: any) => {
    const newQuestionsStringify = JSON.stringify(questions);
    const newQuestions = JSON.parse(newQuestionsStringify);
    newQuestions[indexQuestion].answers.splice(indexAnswer, 1);
    if (indexAnswer === questions[indexQuestion].correctAnswerIndex) {
      newQuestions[indexQuestion].correctAnswerIndex = null;
    } else if (indexAnswer < questions[indexQuestion].correctAnswerIndex) {
      newQuestions[indexQuestion].correctAnswerIndex =
        newQuestions[indexQuestion].correctAnswerIndex - 1;
    }
    setQuestionsEdit(newQuestions);
  };

  const handleCorrectAnswerChange = (index: any, indexQuestion: any) => {
    let copyArray = [...questionsEdit];
    let question = copyArray.find((question, index) => index == indexQuestion);
    question.correctAnswerIndex = index;
    setQuestionsEdit(copyArray);
  };

  const removeQuestion = (index: any) => {
    const newQuestion = [...questions];
    newQuestion.splice(index, 1);
    setQuestionsEdit(newQuestion);
    setQuestions(newQuestion);
  };

  const addAnswer = (indexQuestion: any) => {
    console.log(indexQuestion, "addAnswer");
    const newAnswers = [...questions];
    let question = newAnswers[indexQuestion];
    console.log(question, "addAnswer");
    let answer = question.answers;
    console.log(answer, "addAnswer");
    answer.push("");
    setQuestionsEdit(newAnswers);
    setQuestions(newAnswers);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      alignItems="center"
      height="100%"
      minHeight="100vh"
    >
      <Box
        bgcolor="#f8f8ff"
        width="60%"
        sx={{
          py: 2,
          px: 6,
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" component="h1">
          Edit Quiz
        </Typography>
        {questionsEdit &&
          questionsEdit.map(
            (
              { question, answers, correctAnswerIndex }: any,
              indexQuestion: any
            ) => (
              <>
                <Paper
                  sx={{ px: 3, pt: 3, pb: 1, marginBottom: 2, mt: 2 }}
                  elevation={2}
                  key={indexQuestion}
                >
                  <Stack direction="row" alignItems="center">
                    <Question
                      question={question}
                      questions={questions}
                      index={indexQuestion}
                      setQuestions={setQuestions}
                    />
                    <CloseOutlinedIcon
                      style={{ color: "red" }}
                      onClick={() => removeQuestion(indexQuestion)}
                    />
                  </Stack>

                  <br />
                  {answers.map((index: any) => (
                    <Box key={index}>
                      <Stack direction="row" alignItems="center">
                        <Radio
                          size="small"
                          id={`correctAnswer${index}`}
                          name="correctAnswer"
                          onChange={() =>
                            handleCorrectAnswerChange(index, indexQuestion)
                          }
                        />
                        <TextField
                          sx={{ flex: 1 }}
                          label={`Answer ${index + 1}`}
                          variant="standard"
                          type="text"
                          id={`answer${index}`}
                          name="answer[]"
                          value={questionsEdit[indexQuestion].answers[index]}
                          required
                          onChange={(e) =>
                            handleAnswerChange(
                              indexQuestion,
                              index,
                              e.target.value
                            )
                          }
                        />
                        <CloseOutlinedIcon
                          style={{ color: "red" }}
                          onClick={() => removeAnswer(index, indexQuestion)}
                        />
                      </Stack>

                      {/* {index >= 2 && <button type="button" onClick={() => removeAnswer(index)}>Remove Answer</button>} */}

                      <br />
                    </Box>
                  ))}
                  <Typography gutterBottom>
                    Correct Answer Index is{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {questionsEdit[indexQuestion].correctAnswerIndex}
                    </span>
                  </Typography>
                  <Box className="center-button-edit">
                    {answers.length < 4 && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => addAnswer(indexQuestion)}
                      >
                        Add Answer
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      type="submit"
                      color="success"
                      onClick={() => handleSubmit(indexQuestion)}
                    >
                      Submit
                    </Button>
                  </Box>
                </Paper>
              </>
            )
          )}
        {questionsEdit.length > 0 && !showForm && (
          <>
            <Button
              variant="contained"
              sx={{ color: "white" }}
              onClick={toggleForm}
            >
              Add new Question
            </Button>
          </>
        )}
        <br />
        {(questions.length == 0 || showForm) && (
          <>
            <Form
              setShowForm={setShowForm}
              handleData={handleData}
              handleEdit={handleEdit}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

export default EditQuiz;

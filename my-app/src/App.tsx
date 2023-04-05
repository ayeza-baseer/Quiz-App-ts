import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import type { RootState } from "./store/store";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditQuiz from "./pages/EditQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import { useGetUsersQuery } from "./Services/register";

// import QuizPage from './pages/QuizPage';

const theme = createTheme({
  palette: {
    primary: { main: "#1486C9" },
  },
});
function App() {
  //just for checking have to remove it from here
  const { data, error, isLoading } = useGetUsersQuery();

  const login = useSelector((state: RootState) => state.login);
  console.log(login, "loginSelector");
  const [questions, setQuestions] = useState<any>([]);

  const handleData = (data: any) => {
    setQuestions([...questions, data]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        textAlign="center"
        sx={{
          minHeight: "100vh",
          height: "auto",
          backgroundColor: "#EEF2F6",
          margin: 0,
        }}
      >
        {/* <button onClick={addData}>Add Data</button> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/edit-quiz"
              element={
                <EditQuiz
                  questions={questions}
                  handleData={handleData}
                  setQuestions={setQuestions}
                />
              }
            />
            <Route
              path="/take-quiz"
              element={<TakeQuiz questions={questions} />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;

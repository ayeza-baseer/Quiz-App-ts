import React from "react";

import { Button, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
function Quiz() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        alignItems="center"
        height="100vh"
      >
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: "primary",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#F0F8FF" },
            }}
            onClick={() => navigate("/edit-quiz")}
          >
            Edit Quiz
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: "primary",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#F0F8FF" },
            }}
            onClick={() => navigate("/take-quiz")}
          >
            Take Quiz
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: "primary",
              backgroundColor: "white",
              "&:hover": { backgroundColor: "#F0F8FF" },
            }}
            onClick={() => navigate("/quiz")}
          >
            Quiz
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Quiz;

import React from 'react';
import {Button,
Box,
Stack,
TextField,
Radio,
Paper,
Typography,
} from "@mui/material";

function Result({correctAnswers,questionsLength}:any) {
    return (
        <Box   display="flex"
        justifyContent="center"
        gap={2}
        alignItems="center"
        height="100vh">
       
        <Typography gutterBottom variant="h5" sx={{mb:2}}>Result</Typography>
        <Typography>Percentage Scored: {(correctAnswers/questionsLength)*100}%</Typography>
        
       </Box>
    );
}

export default Result;
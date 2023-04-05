import React from 'react';
import {useParams} from 'react-router-dom'
import { Box,Typography} from "@mui/material";
function QuestionDetails({questions}:any) {
    const {index}=useParams()
    return (
        <Box>
           <Typography>Question {index}</Typography>
        </Box>
    );
}

export default QuestionDetails;
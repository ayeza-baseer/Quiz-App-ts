import React from 'react';
import { Box,Typography} from "@mui/material";
function QuizIndexes({questions}:any) {
    return (
        <Box>
            {
                questions.map(({correctAnswerIndex}:any,index:any) => {
                    return (
                        <Box m={2} key={index}>
                            <Typography>Correct Answer Indexes : {correctAnswerIndex}</Typography>   
                        </Box>
                    )
                })
            }
        </Box>
    );
}

export default QuizIndexes;
import React from 'react';
import { Box,Typography} from "@mui/material";
import {Outlet,Link} from 'react-router-dom'
function QuizList({questions}:any) {
    return (
        <Box>
            {
                questions.map(({question}:any,index:any) => {
                    return (
                        <Box m={2} key={index}>
                            <Link to={`${index}`}>Question : {question}</Link>   
                        </Box>
                    )
                })
            }

            <Outlet/>
        </Box>
    );
}

export default QuizList;
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { ButtonGroup } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

export default function Quiz() {
    const questions = 
    [ {
          question: 'What is the capital of France?',
          options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
          answer: 'Paris'
        },
        {
          question: 'What is the largest planet in the solar system?',
          options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
          answer: 'Jupiter'
        },
        {
          question: 'What is the highest mountain in the world?',
          options: ['Everest', 'Kilimanjaro', 'Denali', 'Aconcagua'],
          answer: 'Everest'
        },
        {
          question: 'Who wrote the Harry Potter series of books?',
          options: ['J.K. Rowling', 'Stephen King', 'Dan Brown', 'George R.R. Martin'],
          answer: 'J.K. Rowling'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (answer) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{
                marginTop: 3
            }}>
                <Box>
                    <>
                        <Card variant="outlined">
                            <Box>
                                <div className=''>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            {showScore ? (
                                                <div>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                    }}>
                                                        You scored {score} out of {questions.length}
                                                    </Typography>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}>
                                                            <Button
                                                                sx={{
                                                                    border: "1px solid", margin: '6px 0', color: "white"
                                                                }}
                                                                onClick={() => {
                                                                    setCurrentQuestion(0);
                                                                    setShowScore(false);
                                                                    setScore(0);
                                                                }}>
                                                                Reset
                                                            </Button>
                                                    </Typography>

                                                </div>
                                            ) : (
                                                <>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                    }}>
                                                        {currentQuestion + 1}) {questions[currentQuestion].question}
                                                    </Typography>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}>
                                                        {questions[currentQuestion].options.map((option , index) => (
                                                            <Button
                                                                sx={{
                                                                    border: "1px solid", margin: '6px 0', color: "white"
                                                                }}
                                                                key={index}
                                                                onClick={() => handleAnswerButtonClick(option)}>
                                                                {option}
                                                            </Button>
                                                        ))}
                                                    </Typography>

                                                </>
                                            )}
                                        </Grid>
                                    </Grid>
                                </div>
                            </Box>
                        </Card>
                    </>
                </Box>
            </Container>
        </React.Fragment>
    );
}
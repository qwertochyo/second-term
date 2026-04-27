import { Box, Button, Container, Typography } from "@mui/material";
import { quiz } from "../../../mock/quiz";
import { Matching } from "./Matching";
import { useState } from "react";
import { QuizResult } from "../components/QuizResult";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { IReslt, ITask } from "../../../types/types";
import { addList, reset } from "./quizSlice";

export const Quiz = () => {
  const [isShowResult, setIsShowResult] = useState(false);

  const listsM = useSelector((state: RootState) => state.lists.listsM);
  const listsS = useSelector((state: RootState) => state.lists.listsS);

  const userAnswers = quiz.map((item, index) => {
    return item.type === "M"
      ? listsM[index] || []
      : listsS[index] || [];
  });

  const dispatch = useDispatch();

  const resetQuiz = () => {
    setIsShowResult(false);
    dispatch(reset());
    
    quiz.forEach((item, index) => {
      const answers = item.tasks.toSorted(() => Math.random() - 0.5);
      dispatch(addList({ index: index, items: answers, type: item.type }));
    });
  };

  const correctAnswers = quiz.map((item) => {
    return item.tasks.map((task) => {
      return task.answer;
    })
  })

  const countCorrect = (correct: string[][], answers: ITask[][]): IReslt[] => {
    return correct.map((correctTask, i) => {
      const userTask = answers[i] || [];
  
      let count = 0;
  
      for (let j = 0; j < correctTask.length; j++) {
        if (correctTask[j] === userTask[j]?.answer) {
          count++;
        }
      }
  
      return {
        correct: count,
        total: correctTask.length,
      };
    });
  };

  const result = countCorrect(correctAnswers, userAnswers);

  return (
    <Container maxWidth="md">
      {quiz.map((item, index) => (
        <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. { item.title }
          </Typography>
          <Matching index={index} tasks={item.tasks} type={item.type} />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
        <Button variant="contained" onClick={() => setIsShowResult(true)}>Проверить</Button>
        <Button variant="contained" onClick={() => { 
          setIsShowResult(false);
          resetQuiz();
        }}>Начать снова</Button>
      </Box>
      {isShowResult && <QuizResult result={result} />}
    </Container>
  );
}
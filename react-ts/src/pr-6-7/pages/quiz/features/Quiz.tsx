import { Box, Button, Container, Typography } from "@mui/material";
import { quiz } from "../../../mock/quiz";
import { Matching } from "./Matching";
import { useState } from "react";
import { QuizResult } from "../components/QuizResult";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { IReslt } from "../../../types/types";
import { addList, reset } from "./quizSlice";
import { resetAllChoices } from "./choiceSlice";

export const Quiz = () => {
  const [isShowResult, setIsShowResult] = useState(false);

  const listsM = useSelector((state: RootState) => state.lists.listsM);
  const listsS = useSelector((state: RootState) => state.lists.listsS);
  const listsC = useSelector((state: RootState) => state.lists.listsC);
  const userChoiceAnswers = useSelector((state: RootState) => state.choice.userAnswers);

  const userAnswers = quiz.map((item, index) => {
    return item.type === "M" ? listsM[index] || [] : item.type === "S" ? listsS[index] || [] : listsC[index] || [];
  });

  const dispatch = useDispatch();

  const resetQuiz = () => {
    setIsShowResult(false);
    dispatch(reset());
    dispatch(resetAllChoices());
    
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

  const countCorrect = (correct: string[][]): IReslt[] => {
    return correct.map((correctTask, quizIndex) => {
      const quizType = quiz[quizIndex].type;
      let count = 0;

      if (quizType === "C") {
        const userAnswer = userChoiceAnswers[quizIndex];
        console.log(userAnswer);
        for (let taskIndex = 0; taskIndex < correctTask.length; taskIndex++) {
          if (userAnswer?.answer === correctTask[taskIndex] && userAnswer?.answer === "1") {
            count++;
          }
        }
      } else {
        const userTasks = userAnswers[quizIndex] || [];
        for (let taskIndex = 0; taskIndex < correctTask.length; taskIndex++) {
          if (userTasks[taskIndex]?.answer === correctTask[taskIndex]) {
            count++;
          }
        }
      }

      return {
        correct: count,
        total: quizType === "C" ? 1 : correctTask.length,
      };
    });
  };

  const result = countCorrect(correctAnswers);

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
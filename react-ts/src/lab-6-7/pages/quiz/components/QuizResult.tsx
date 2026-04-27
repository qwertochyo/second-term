import { Box, Typography } from "@mui/material";
import type { IReslt } from "../../../types/types";

interface Props {
  result: IReslt[]
}

export const QuizResult = ({ result }: Props) => {
  return (
    <Box sx={{mt: 5, textAlign: "center"}}>
      <Typography variant="h4" sx={{mb: 2}}>Результаты теста</Typography>
      <Box>
      {result.map((item, index) => (
        <Typography 
          key={index} 
          variant="body1"
        >
          Задание {index + 1}: верных ответов {item.correct} из {item.total}
        </Typography>
      ))}
    </Box>
    </Box>
  );
}
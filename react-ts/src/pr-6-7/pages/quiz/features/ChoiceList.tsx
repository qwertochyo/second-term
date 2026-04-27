import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { FormControlLabel, List, Radio, RadioGroup } from "@mui/material";
import { saveChoice } from "./choiceSlice";

interface Props {
  index: number;
}

export const ChoiceList = ({ index }: Props) => {
  const dispatch = useDispatch();
  const listsC = useSelector((state: RootState) => state.lists.listsC[index]) || [];

  const userAnswers = useSelector((state: RootState) => 
    state.choice.userAnswers[index]
  );

  return (
    <List>
      <RadioGroup
        value={userAnswers?.id ?? ""}
        onChange={(e) => {
          const selectedId = e.target.value;

          const selectedTask = listsC.find(
            item => item.id === selectedId
          );

          if (selectedTask) {
            dispatch(saveChoice({ 
              quizIndex: index,
              selectedTask
            }));
          }
        }}
      >
        {listsC.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.question}
          />
        ))}
      </RadioGroup>
    </List>
  );
}
import { Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import type { ITask, TTaskType } from "../../../types/types";
import { SortableList } from "./SortableList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addList } from "./quizSlice";
import { ChoiceList } from "./ChoiceList";

interface Props {
  index: number;
  tasks: ITask[];
  type: TTaskType;
}

export const Matching = ({ index, tasks, type }: Props) => {
  const tasksStore = tasks.toSorted(() => Math.random() - 0.5);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addList({ index, items: tasksStore, type }));
  }, []);

  return (
    <Grid container spacing={2}>
      { type === "M" && 
        <Grid size={6}>
          <List>
            {tasks.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton
                  sx={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    textAlign: 'right',
                }}>
                  <ListItemText primary={item.question} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      }
      <Grid size={type === "M" ? 6 : 12}>
        { type !== "C" ? (
          <SortableList index={index} type={type} />
        ) : (
          <ChoiceList index={index} />
        )}
      </Grid>
    </Grid>
  );
}
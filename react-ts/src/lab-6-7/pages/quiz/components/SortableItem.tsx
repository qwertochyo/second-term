import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { ITask } from "../../../types/types";

interface Props {
  item: ITask,
  type: "M" | "S"
}

export const SortableItem = ({ item, type }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ListItem 
      ref={ setNodeRef } 
      style={ style } 
      { ...attributes } 
      {...listeners }
    >
      <ListItemButton
        sx={{
          border: '1px solid gray',
          borderRadius: '5px'
        }}
      >
        <ListItemIcon>
          {/* <DragIndicatorIcon /> */}
        </ListItemIcon>
        {type === "M" ? (
          <ListItemText primary={ item.answer } />
        ) : (
          <ListItemText primary={ item.question } />
        )}
        
      </ListItemButton>
    </ListItem>
  );
}
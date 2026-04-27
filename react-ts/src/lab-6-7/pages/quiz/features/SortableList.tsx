import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { List } from "@mui/material";
import { SortableItem } from "../components/SortableItem";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setDraggedItems } from "./quizSlice";

interface Props {
  index: number
  type: "M" | "S"
}

export const SortableList = ({ index, type }: Props) => {
  const dispatch = useDispatch();
  const answersM = useSelector((state: RootState) => state.lists.listsM[index]);
  const answersS = useSelector((state: RootState) => state.lists.listsS[index]);
  const draggedItems = type === "M" ? answersM || [] : answersS || [];

  const itemIds = draggedItems.map(item => item.id);

  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    if (active.id !== over.id) {
      const oldIndex = draggedItems.findIndex(item => item.id === active.id);
      const newIndex = draggedItems.findIndex(item => item.id === over.id);
      const newList = arrayMove(draggedItems, oldIndex, newIndex);
      dispatch(setDraggedItems({ index, items: newList, type }));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext 
        items={ itemIds }
        strategy={verticalListSortingStrategy}
      >
        <List>
          {draggedItems.map((item) => (
            <SortableItem key={ item.id } item={ item } type={type} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
}
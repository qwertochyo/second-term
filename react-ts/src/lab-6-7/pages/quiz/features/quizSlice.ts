import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../../types/types";

interface ListsState {
  listsM: ITask[][];
  listsS: ITask[][];
}

const initialState: ListsState = {
  listsM: [],
  listsS: []
}

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ index: number; items: ITask[]; type: "M" | "S" }>) => {
      const { index, items, type } = action.payload;

      if (type === "M") {
        if (state.listsM[index]) return;
        state.listsM[index] = items;
      }

      if (type === "S") {
        if (state.listsS[index]) return;
        state.listsS[index] = items;
      }

      //state.lists.splice(index, 0, items);
    },
    setDraggedItems: (state,action: PayloadAction<{ index: number; items: ITask[]; type: "M" | "S" }>) => {
      const { index, items, type } = action.payload;
      if (type === "M") {
        state.listsM[index] = items;
      }
    
      if (type === "S") {
        state.listsS[index] = items;
      }
    },
    reset: (state) => {
      state.listsM = [];
      state.listsS = [];
    }
  }
});

export const { addList, setDraggedItems, reset } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;

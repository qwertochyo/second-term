import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask, TTaskType } from "../../../types/types";

interface ListState {
  listsM: ITask[][]
  listsS: ITask[][]
  listsC: ITask[][]
}

interface AddListPayload {
  index: number
  items: ITask[]
  type: TTaskType
}

const initialState: ListState = {
  listsM: [],
  listsS: [],
  listsC: []
}

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<AddListPayload>) => {
      const { index, items, type } = action.payload;

      if (type === "M") {
        if (state.listsM[index]) return;
        state.listsM[index] = items;
      }

      if (type === "S") {
        if (state.listsS[index]) return;
        state.listsS[index] = items;
      }

      if (type === "C") {
        if (state.listsC[index]) return;
        state.listsC[index] = items;
      }
    },
    setDraggedItems: (state,action: PayloadAction<AddListPayload>) => {
      const { index, items, type } = action.payload;
      if (type === "M") {
        state.listsM[index] = items;
      }
    
      if (type === "S") {
        state.listsS[index] = items;
      }

      if (type === "C") {
        state.listsC[index] = items;
      }
    },
    reset: (state) => {
      state.listsM = [];
      state.listsS = [];
      state.listsC = [];
    }
  }
})

export const { addList, setDraggedItems, reset } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;


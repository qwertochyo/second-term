import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "../features/quizSlice";

export const store = configureStore({
  reducer: {
    lists: listsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
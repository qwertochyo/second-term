import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "../features/quizSlice";
import { choiceReducer } from "../features/choiceSlice";

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    choice: choiceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
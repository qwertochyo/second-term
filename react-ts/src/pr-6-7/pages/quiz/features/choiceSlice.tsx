import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ITask } from "../../../types/types"

interface ChoiceState {
  userAnswers: {
    [quizIndex: number]: ITask
  }
}

const initialState: ChoiceState = {
  userAnswers: {}
}

const choiceSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    saveChoice: (state, action: PayloadAction<{ quizIndex: number, selectedTask: ITask }>) => {
      const { quizIndex, selectedTask } = action.payload;
      state.userAnswers[quizIndex] = selectedTask;
    },
    resetChoice: (state, action: PayloadAction<{ quizIndex: number }>) => {
      delete state.userAnswers[action.payload.quizIndex];
    },
    resetAllChoices: (state) => {
      state.userAnswers = {};
    }
  }
})

export const { saveChoice, resetChoice, resetAllChoices } = choiceSlice.actions;
export const choiceReducer = choiceSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store/store";
import { IOption, IQuestion } from "@/types/configTypes";

type INITIAL_STATE = {
  answer: Record<string, IOption>;
};

const initialState: INITIAL_STATE = {
  answer: {},
};

export const answerSlice = createSlice({
  name: "answer",
  initialState: initialState,
  reducers: {
    updateAnswer: (state, action: PayloadAction<{ fieldName: string; value: IOption }>) => {
      state.answer = {
        ...state.answer,
        [action.payload.fieldName]: action.payload.value,
      };
    },
  },
});

export const selectAnswer = (state: RootState) => state.answer.answer;

export const selectAnswerField =
  (fieldName: string) =>
  (state: RootState): IOption | null =>
    state.answer.answer[fieldName] || null;
export const { updateAnswer } = answerSlice.actions;

export default answerSlice.reducer;

import { RootState } from "../store";

export const selectTasbeehCount = (state: RootState) => state.tasbeeh.count
export const selectResetStatus = (state: RootState) => state.tasbeeh.resetStatus


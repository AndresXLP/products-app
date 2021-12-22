import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: { dateNow: Date.now(), timeLimit: [] },
  reducers: {
    setTimeLimit: (state, action) => {
      state.timeLimit = [...state.timeLimit, { ...action.payload }];
    },
    updateTime: (state) => {
      state.dateNow = Date.now();
    },
  },
});

export const { setTimeLimit, setCountDown, updateTime } = timerSlice.actions;
export default timerSlice.reducer;

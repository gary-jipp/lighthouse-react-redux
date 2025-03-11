import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {value: 0},
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export default counterSlice;
export const counterReducer = counterSlice.reducer;

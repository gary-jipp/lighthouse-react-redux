import {createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

export default function useCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const increment = function() {
    dispatch(counterSlice.actions.increment());
  };

  const decrement = function() {
    dispatch(counterSlice.actions.decrement());
  };

  const clear = function() {
    dispatch(counterSlice.actions.reset());
  };

  return {count, increment, decrement, clear};
};

// counterSlice is read first by main.jsx so we can do this
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

export const counterReducer = counterSlice.reducer;

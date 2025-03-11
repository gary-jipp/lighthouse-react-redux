import {useDispatch, useSelector} from "react-redux";
import counterSlice from "../store/counterSlice";

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

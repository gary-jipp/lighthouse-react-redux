import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "@/hooks/useCounter";

export default configureStore({
  reducer: {
    counter: counterReducer
  },
});

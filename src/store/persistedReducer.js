import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import {counterReducer} from "./counterSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default persistReducer(persistConfig, rootReducer);

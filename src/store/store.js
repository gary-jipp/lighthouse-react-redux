import {configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist"; // Import these functions
import persistedReducer from "./persistedReducer";
import logger from "./logger";

const store = configureStore({
  reducer: persistedReducer,

  // Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Example: ignore specific actions
      },
    }).concat(logger),  // can concat more here
});

const persistor = persistStore(store);

export {store, persistor};
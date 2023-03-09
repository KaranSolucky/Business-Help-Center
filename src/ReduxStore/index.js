import { configureStore } from "@reduxjs/toolkit";

// Import Reducers

import loginReducer from "./loginReducer";

export const store = configureStore({
  reducer: {
    loginStore: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      thunk: false,
    }),
});

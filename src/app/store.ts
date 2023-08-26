import { configureStore } from "@reduxjs/toolkit";
import { reducerPath, reducer, middleware } from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [reducerPath]: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

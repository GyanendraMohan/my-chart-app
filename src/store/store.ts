import { configureStore } from "@reduxjs/toolkit";
import toggleRducer from "../features/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleRducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

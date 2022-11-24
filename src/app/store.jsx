import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { ApiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    // j'ai aucune idée de ce que fais cette ligne
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  devTools: true, // switch to false in production
});

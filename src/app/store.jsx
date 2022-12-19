import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { ColApiSlice } from "../features/cols/ColApiSlice";
import { RegisterApiSlice } from "../features/register/registerApiSlice";
import { ApiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: RegisterApiSlice.reducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    cols: ColApiSlice.reducer,
    // j'ai aucune idée de ce que fais cette ligne
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  devTools: true, // switch to false in production
});

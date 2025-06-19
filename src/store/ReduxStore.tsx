import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice";

export const ReduxStorage = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof ReduxStorage.getState>;
export type AppDispatch = typeof ReduxStorage.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

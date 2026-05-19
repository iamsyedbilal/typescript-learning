import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};

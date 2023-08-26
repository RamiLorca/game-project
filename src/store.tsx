import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer, { ShoppingState } from './shoppingSlice';
import userReducer, { UserState } from './features/user';
import themeReducer, { ThemeState } from './features/theme';

export interface RootState {
    shopping: ShoppingState;
    user: UserState;
    theme: ThemeState;
  }

const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
        user: userReducer,
        theme: themeReducer,
    },
});

export default store;


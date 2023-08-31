import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer, { ShoppingState } from './shoppingSlice';
import userReducer, { UserState } from './features/user';
import accountReducer, { AccountState } from './features/account';
import themeReducer, { ThemeState } from './features/theme';

export interface RootState {
    shopping: ShoppingState;
    user: UserState;
    theme: ThemeState;
    account: AccountState;
  }

const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
        user: userReducer,
        theme: themeReducer,
        account: accountReducer,
    },
});

export default store;


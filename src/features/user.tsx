import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    name: string;
    age: number;
    email: string;
}

const initialStateValue: UserState = {
    name: "", 
    age: 0, 
    email: "" 
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateValue,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.name = "";
            state.age = 0;
            state.email = "";
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
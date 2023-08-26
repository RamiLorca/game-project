import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Preferences {
    username: string;
    user_id: number;
    wants_action: boolean;
    wants_adventure: boolean;
    wants_comedy: boolean;
    wants_drama: boolean;
    wants_horror: boolean;
    wants_romance: boolean;
    wants_scifi: boolean;
    wants_thriller: boolean;
    wants_family: boolean;
}

export interface UserState {
    name: string;
    age: number;
    email: string;
    id: number;
    preferences: Preferences | null;
}

const initialStateValue: UserState = {
    name: "", 
    age: 0, 
    email: "" ,
    id: 1,
    preferences: null
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
            state.preferences = null;
        },
        setUserPreferences: (state, action: PayloadAction<Preferences>) => {
            state.preferences = action.payload;
        },
    },
});

export const { login, logout, setUserPreferences } = userSlice.actions;

export default userSlice.reducer;
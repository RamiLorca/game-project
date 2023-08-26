import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    color: string;
}

const initialStateValue: ThemeState = {
    color: ""
};


export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialStateValue,
    reducers: {
        changeColor: (state, action: PayloadAction<ThemeState>) => {
            state.color = action.payload.color;
        },
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
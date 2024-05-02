import { createSlice } from '@reduxjs/toolkit';
import { ThemeInterface } from '../types/types';

// Determine the initial theme based on system preferences
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState: ThemeInterface = {
    theme: prefersDarkTheme ? 'dark' : 'light',
};

// Managing theme
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        TOGGLE_THEME: (state, action) => {
            state.theme = action.payload.theme;
        },
    },
});

// Make action available for all components
export const { TOGGLE_THEME } = themeSlice.actions;

// Reducer to store
export default themeSlice.reducer;

// Reference to theme state
export const selectTheme = (state: { theme: ThemeInterface }) => state.theme.theme;
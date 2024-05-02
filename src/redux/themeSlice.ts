import { createSlice } from '@reduxjs/toolkit';
import { ThemeInterface } from '../types/types';

// Determine the initial theme based on system preferences
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = JSON.parse(localStorage.getItem('theme') as string);
let initialTheme = prefersDarkTheme ? 'dark' : 'light'; // Set initial theme based on system preference

if (storedTheme && storedTheme.theme) {
    initialTheme = storedTheme.theme; // If theme is stored in local storage, override with stored theme
}

const initialState: ThemeInterface = {
    theme: initialTheme,
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

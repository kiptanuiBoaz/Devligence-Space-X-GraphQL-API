import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types/types';

const initialState: AuthState = {
    user: "",
};

// updating logged in user
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        UPDATE_USER: (state, action) => {
            state.user = action.payload.user;
        },
        RESET_USER: (state) => {
            state.user = initialState.user;
        },
    },
});

// Make action available for all components
export const { UPDATE_USER, RESET_USER } = authSlice.actions;

// Reducer to store
export default authSlice.reducer;

// Reference to loggged in user
export const selectTheme = (state: { auth: AuthState }) => state.auth.user;
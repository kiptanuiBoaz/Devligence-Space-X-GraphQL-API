import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JokeStateInterface } from "../types/types";
import { v4 } from 'uuid';

const initialState: JokeStateInterface = {
    joke: {
        "id": v4(),//generate id for joke
        "title": "",
        "body": "",
        "author": "",
        "views": 0,
        "createdAt": Date.now().toString(),
    },
    editingId: "add",
};

const jokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers: {
        UPDATE_JOKE: (state, action: PayloadAction<JokeStateInterface>) => {
            const { joke, editingId } = action.payload;
            state.editingId = editingId;
            state.joke = joke;
        },
        RESET_JOKE: (state) => {
            state.editingId = initialState.editingId;
            state.joke = initialState.joke;
        },
        // wether we are adding a new or editing an old joke
        UPDATE_EDITING_ID: (state, action: PayloadAction<JokeStateInterface["editingId"]>) => {
            state.editingId = action.payload;
        }

    }

});

//make action available for all components
export const { UPDATE_JOKE, UPDATE_EDITING_ID, RESET_JOKE } = jokeSlice.actions;
//reducer to store
export default jokeSlice.reducer;
//reference to paginaton state
export const selectJoke = (state: { joke: JokeStateInterface }) => state.joke.joke;
export const selectEditingId = (state: { joke: JokeStateInterface }) => state.joke.editingId;
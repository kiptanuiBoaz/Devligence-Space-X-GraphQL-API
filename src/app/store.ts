import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../redux/paginatinSlice';
import jokeSlice from '../redux/dataSlice';
import themeSlice from '../redux/themeSlice';
import authSlice from '../redux/authSlice';


const store = configureStore({
    reducer: {
        pagination: paginationSlice,
        joke: jokeSlice,
        theme: themeSlice,
        user: authSlice,
    },
});

export default store;

//persist state
store.subscribe(() => {
    localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
    localStorage.setItem("theme", JSON.stringify(store.getState().theme));
    localStorage.setItem("joke", JSON.stringify(store.getState().joke));
    localStorage.setItem("user", JSON.stringify(store.getState().user));
});
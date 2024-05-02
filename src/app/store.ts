import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../redux/themeSlice';
import authSlice from '../redux/authSlice';
import launchSlice from '../redux/lauchSlice';
import paginationSlice from '../redux/paginationSlice';


const store = configureStore({
    reducer: {
        pagination: paginationSlice,
        launch: launchSlice,
        theme: themeSlice,
        user: authSlice,
    },
});

export default store;

//persist state
store.subscribe(() => {
    localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
    localStorage.setItem("theme", JSON.stringify(store.getState().theme));
    localStorage.setItem("launch", JSON.stringify(store.getState().launch));
    localStorage.setItem("user", JSON.stringify(store.getState().user));
});
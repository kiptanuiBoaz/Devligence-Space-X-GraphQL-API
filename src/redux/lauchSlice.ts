import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LaunchStateInterface } from '../types/launches.types';

// Load state from local storage if available
const storedState = localStorage.getItem('launch');
let initialState: LaunchStateInterface;

if (storedState) {
    initialState = JSON.parse(storedState);
} else {
    initialState = {
        launch: {
            id: "",
            mission_name: "",
            rocket: {
                rocket_name: ""
            },
            launch_site: {
                site_name: ""
            },
            launch_success: undefined,
            launch_date_local: undefined,
        },
        editingId: "add",
    };
}

const launchSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {
        UPDATE_LAUNCH: (state, action: PayloadAction<LaunchStateInterface>) => {
            const { launch, editingId } = action.payload;
            state.editingId = editingId;
            state.launch = launch;
            localStorage.setItem('launch', JSON.stringify(state));
        },
        RESET_LAUNCH: (state) => {
            state.editingId = initialState.editingId;
            state.launch = {
                id: "",
                mission_name: "",
                rocket: {
                    rocket_name: ""
                },
                launch_site: {
                    site_name: ""
                },
                launch_success: undefined,
                launch_date_local: undefined,
            }

            // localStorage.removeItem('launch');
        },
        UPDATE_EDITING_ID: (state, action: PayloadAction<LaunchStateInterface["editingId"]>) => {
            state.editingId = action.payload;
            localStorage.setItem('launch', JSON.stringify(state));
        }
    }
});

export const { UPDATE_LAUNCH, UPDATE_EDITING_ID, RESET_LAUNCH } = launchSlice.actions;
export default launchSlice.reducer;

export const selectLaunch = (state: { launch: LaunchStateInterface }) => state.launch.launch;
export const selectEditingId = (state: { launch: LaunchStateInterface }) => state.launch.editingId;

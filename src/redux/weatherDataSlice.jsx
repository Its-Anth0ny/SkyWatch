import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
    name: "weatherData",
    initialState: {
        data: [],
    },
    reducers: {
        pushWeatherData: (state, action) => {
            state.data.push(action.payload);
        },
        // deleteWeatherData: (state, action) => {
        //     state.data = state.data.filter(
        //         (item) => item.id !== action.payload
        //     );
        // },
    },
});

export const { pushWeatherData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;

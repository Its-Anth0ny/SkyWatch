import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./weatherDataSlice";

const store = configureStore({
    reducer: {
        weatherData: weatherDataSlice,
    },
});

export default store;

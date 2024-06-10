import { WEATHER_API_KEY } from "@/utils/constants";

async function getWeatherData({ lat, long }) {
    try {
        // console.log(
        //     `Latitude: ${lat}, Longitude: ${long}`
        // );
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=1&appid=${WEATHER_API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export default getWeatherData;

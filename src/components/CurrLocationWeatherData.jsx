import getCurrLocation from "@/utils/getCurrLocation";
import getWeatherData from "@/utils/getWeatherData";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const CurrLocationWeatherData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    async function getWeather() {
        try {
            const { lat, long } = await getCurrLocation();
            const weatherData = await getWeatherData({ lat, long });
            setData(weatherData);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    }

    useEffect(() => {
        getWeather();
    }, []);

    if (error) {
        return (
            <div className="h-[200px] flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    if (!data) {
        return (
            <div className="h-[200px] flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-6">
            <div className="flex items-end justify-between mb-4">
                <p className="flex items-center justify-center text-3xl font-bold gap-x-2 max-sm:text-xl max-sm:gap-x-1">
                    <MapPin /> {data.city.name}
                </p>
                <p className="flex text-lg text-gray-600 max-md:flex-col max-sm:text-sm md:gap-x-2">
                    <p>Date: {date},</p>
                    <p>Time: {time}</p>
                </p>
            </div>
            <div className="space-y-4">
                {data.list.map((item) => (
                    <div
                        key={item.dt}
                        className="p-4 border border-gray-200 rounded-lg max-smx:p-4"
                    >
                        <div className="grid grid-cols-1 gap-4 smx:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Temperature:</p>
                                <p>{item.main.temp}°C</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Weather:</p>
                                <p>{item.weather[0].description}</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Feels Like:</p>
                                <p>{item.main.feels_like}°C</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Min Temp:</p>
                                <p>{item.main.temp_min}°C</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Max Temp:</p>
                                <p>{item.main.temp_max}°C</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Pressure:</p>
                                <p>{item.main.pressure} hPa</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Humidity:</p>
                                <p>{item.main.humidity}%</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Visibility:</p>
                                <p>{item.visibility} m</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Wind Speed:</p>
                                <p>{item.wind.speed} m/s</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Wind Direction:</p>
                                <p>{item.wind.deg}°</p>
                            </div>
                            <div className="max-smx:flex max-smx:justify-between">
                                <p className="font-medium">Cloudiness:</p>
                                <p>{item.clouds.all}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrLocationWeatherData;

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { WEATHER_API_KEY } from "@/utils/constants";
import getWeatherData from "@/utils/getWeatherData";
import { useDispatch } from "react-redux";
import { pushWeatherData } from "@/redux/weatherDataSlice";
import { Separator } from "./ui/separator";

const SearchLocation = () => {
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const getLocationInfo = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${WEATHER_API_KEY}`
            );
            const locationData = await response.json();
            if (!response.ok || locationData.length === 0) {
                throw new Error("Location not found");
            }
            // console.log(locationData);
            const weatherData = await getWeatherData({
                lat: locationData[0].lat,
                long: locationData[0].lon,
            });
            weatherData.location = locationData[0].name;
            // console.log(weatherData);
            dispatch(pushWeatherData(weatherData));
            setLoading(false);
            setLocation("");
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <Separator />
            <form
                onSubmit={getLocationInfo}
                className="flex items-center justify-center py-6 space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-4 max-md:px-20 max-smx:px-10"
            >
                <Input
                    id="location"
                    value={location}
                    placeholder="Search City..."
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-[350px] h-[50px] rounded-3xl max-md:w-full max-md:h-[40px] px-4 border border-blue-900"
                    required
                />
                <Button
                    type="submit"
                    className={`w-[125px] h-[50px] rounded-3xl max-md:w-full max-md:h-[40px]`}
                    disabled={!location || loading}
                >
                    {loading ? "Searching..." : "Search "}
                    <ArrowRight
                        className={`ml-2 font-thin text-[3px] max-md:hidden ${
                            loading ? "hidden" : ""
                        }`}
                    />
                </Button>
            </form>
            <Separator />
            {error && (
                <div className="mt-2 text-center text-red-500">
                    Not able to fetch weather data. Please try again.
                </div>
            )}
        </div>
    );
};

export default SearchLocation;

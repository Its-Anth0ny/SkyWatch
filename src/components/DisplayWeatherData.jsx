import { useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";

const DisplayWeatherData = () => {
    const data = useSelector((state) => state.weatherData.data);

    if (!data || data.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                No data available
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
                <Card key={item.city.id} className="rounded-lg shadow-lg">
                    <CardHeader className="p-4 rounded-t-lg">
                        <CardTitle className="text-xl font-semibold">
                            {item.location}
                        </CardTitle>
                        <p className="text-gray-600 max-smx:text-sm">
                            Date: {new Date().toLocaleDateString()}, Time:{" "}
                            {new Date().toLocaleTimeString()}
                        </p>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="space-y-2 ">
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Temperature:
                                </Label>
                                <Label>{item.list[0].main.temp}°C</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">Weather:</Label>
                                <Label>
                                    {item.list[0].weather[0].description}
                                </Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Feels Like:
                                </Label>
                                <Label>{item.list[0].main.feels_like}°C</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Min Temperature:
                                </Label>
                                <Label>{item.list[0].main.temp_min}°C</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Max Temperature:
                                </Label>
                                <Label>{item.list[0].main.temp_max}°C</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">Pressure:</Label>
                                <Label>{item.list[0].main.pressure} hPa</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">Humidity:</Label>
                                <Label>{item.list[0].main.humidity}%</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Visibility:
                                </Label>
                                <Label>{item.list[0].visibility} meters</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="">Wind Speed:</Label>
                                <Label>{item.list[0].wind.speed} m/s</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Wind Direction:
                                </Label>
                                <Label>{item.list[0].wind.deg}°</Label>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <Label className="font-medium">
                                    Cloudiness:
                                </Label>
                                <Label>{item.list[0].clouds.all}%</Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default DisplayWeatherData;

import CurrLocationWeatherData from "@/components/CurrLocationWeatherData";
import DisplayWeatherData from "@/components/DisplayWeatherData";
import SearchLocation from "@/components/SearchLocation";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-80px)]">
            <div>
                <CurrLocationWeatherData />
                <SearchLocation />
                <DisplayWeatherData />
            </div>
        </div>
    );
};

export default Home;

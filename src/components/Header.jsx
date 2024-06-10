import { ModeToggle } from "./mode-toggle";

const Header = () => {
    return (
        <div className="h-[80px] backdrop-blur-lg top-0 flex justify-center items-center sticky px-6 max-sm:h-[60px] dark:bg-opacity-10 bg-opacity-25 bg-blue-400">
            <h1 className="text-3xl">SkyWatch</h1>
            <div className="absolute right-[40px] max-sm:right-[20px]">
                <ModeToggle className="w-[50px]" />
            </div>
        </div>
    );
};

export default Header;

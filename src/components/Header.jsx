import { ModeToggle } from "./mode-toggle";

const Header = () => {
    return (
        <div className="h-[80px] backdrop-blur-md top-0 flex justify-center items-center sticky px-6 max-sm:h-[60px]">
            <h1 className="text-3xl">SkyWatch</h1>
            <div className="absolute right-[40px] max-sm:right-[20px]">
                <ModeToggle className="w-[50px]" />
            </div>
        </div>
    );
};

export default Header;

import { HamburgerMenu, Search } from "../images";

export default function Header() {
    return (
        <div className="bg-[#767676] flex items-end text-center h-16 px-3 py-3 text-xl">
            <div className="px-1 py-0.5">
                <HamburgerMenu />
            </div>
            <div className="flex-1 font-rubik">
                BAD<span className="text-teal-300">MINT</span>OR
            </div>
            <div className="px-1 py-0.5">
                <Search />
            </div>
        </div>
    );
};
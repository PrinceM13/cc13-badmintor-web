import { useState } from "react";
import { HamburgerIcon, SearchIcon } from "../images";
import HamburgerList from "./HamburgerList";

export default function Header() {
    const [isHambugerListShow, setIsHambugerListShow] = useState(false);

    return (
        <div className="relative bg-[#767676] flex items-end text-center h-16 px-3 py-3 text-xl">
            <div
                className="px-1 py-0.5 cursor-pointer"
                onClick={() => setIsHambugerListShow(!isHambugerListShow)}
            >
                <HamburgerIcon />
            </div>
            <HamburgerList isHambugerListShow={isHambugerListShow} />

            <div className="flex-1 font-rubik">
                BAD<span className="text-[#02FECB]">MINT</span>OR
            </div>
            <div className="px-1 py-0.5">
                <SearchIcon />
            </div>
        </div>
    );
};
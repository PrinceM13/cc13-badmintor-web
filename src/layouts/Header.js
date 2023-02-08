import { useState } from "react";
import { Link } from 'react-router-dom';

import { HamburgerIcon, SearchIcon } from "../images";
import HamburgerList from "./HamburgerList";

export default function Header() {
    const [isHambugerListShow, setIsHambugerListShow] = useState(false);

    return (
        <>
            <div className="relative bg-[#767676] flex items-end text-center h-16 px-3 py-3 text-xl">
                <div className="px-1 py-0.5 cursor-pointer" >
                    <div onClick={() => setIsHambugerListShow(!isHambugerListShow)}>
                        <HamburgerIcon />
                    </div>
                    <HamburgerList isHambugerListShow={isHambugerListShow} onClose={() => { setIsHambugerListShow(false) }} />
                </div>

                <div className="flex-1 font-rubik">
                    BAD<span className="text-[#02FECB]">MINT</span>OR
                </div>
                <div className="px-1 py-0.5">
                    <SearchIcon />
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <Link to='/admin/categories'>
                    <button className="bg-transparent hover:bg-[#02FECB] text-[#02FECB] font-semibold hover:text-[#1E1E1E] py-2 px-4 border border-[#02FECB] hover:border-transparent rounded">
                        ADMIN
                    </button>
                </Link>
                <Link to='/super-user/employees'>
                    <button className="bg-transparent hover:bg-[#02FECB] text-[#02FECB] font-semibold hover:text-[#1E1E1E] py-2 px-4 border border-[#02FECB] hover:border-transparent rounded">
                        SUPER_USER
                    </button>
                </Link>
            </div>
        </>
    );
};
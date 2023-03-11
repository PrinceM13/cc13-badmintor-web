import { useState } from "react";
import { Link } from 'react-router-dom';

import useClickOutside from '../hooks/useClickOutside';

import { HamburgerIcon, SearchIcon } from "../images";
import HamburgerList from "./HamburgerList";

export default function Header() {
    const [isHambugerListShow, setIsHambugerListShow] = useState(false);
    const outsideClick = useClickOutside(() => setIsHambugerListShow(false));

    return (
        <>
            <div className="relative bg-my-gray-3 flex items-end text-center h-16 px-3 py-3 text-xl">
                <div ref={outsideClick} className="px-1 py-0.5 cursor-pointer" >
                    <div onClick={() => setIsHambugerListShow(!isHambugerListShow)}>
                        <HamburgerIcon />
                    </div>
                    <HamburgerList isHambugerListShow={isHambugerListShow} onClose={() => { setIsHambugerListShow(false) }} />
                </div>

                <div className="flex-1 font-rubik">
                    <Link to={'/'}>
                        BAD<span className="text-my-mint">MINT</span>ER
                    </Link>
                </div>
                <div className="px-1 py-0.5">
                    <SearchIcon />
                </div>
            </div>

            {/* route check --> /admin and /super-user */}

            {/* <div className="flex justify-center gap-4">
                <Link to='/admin/categories'>
                    <button className="bg-transparent hover:bg-my-mint text-my-mint font-semibold hover:text-my-gray-3 py-2 px-4 border border-my-mint hover:border-transparent rounded">
                        ADMIN
                    </button>
                </Link>
                <Link to='/super-user/employees'>
                    <button className="bg-transparent hover:bg-my-mint text-my-mint font-semibold hover:text-my-gray-3 py-2 px-4 border border-my-mint hover:border-transparent rounded">
                        SUPER_USER
                    </button>
                </Link>
            </div> */}
        </>
    );
};
import { Link } from 'react-router-dom'

import { BRANDS, CATEGORIES, LOGIN, LOGOUT, MY_CART, MY_PROFILE, PROMOTIONS } from '../config/constant';
import { getAccessToken, removeAccessToken } from '../utils/local-storage';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/auth-slice';

export default function HamburgerList({ isHambugerListShow, onClose }) {
    const dispatch = useDispatch();

    const items = [
        { label: PROMOTIONS, target: '/promotions' },
        { label: BRANDS, target: '/brands' },
        { label: CATEGORIES, target: '/categories' },
        { label: MY_CART, target: '/user/cart' }
    ];

    if (getAccessToken()) {
        items.push({ label: MY_PROFILE, target: '/user/profile' });
        items.push({ label: LOGOUT, target: '/' });
    } else {
        items.push({ label: LOGIN, target: '/login' });
    }

    const handleOnClickLink = e => {
        if (e.target.getAttribute('name') === LOGOUT) { removeAccessToken() }
        dispatch(setUser(null));
        onClose();
    };

    const ListItems = items.map((item, idx) => (
        <Link key={idx} to={item.target}>
            <div key={idx} name={item.label} onClick={handleOnClickLink} className={`px-7 py-3 w-full border border-1 ${idx === 0 ? '' : 'border-t-0'} border-[#D9D9D9] bg-[#767676] text-left`}>
                {item.label}
            </div>
        </Link>
    ));

    return (
        <div className="absolute w-3/4 top-16 left-0 text-base">
            {isHambugerListShow && ListItems}
        </div>

    );
};
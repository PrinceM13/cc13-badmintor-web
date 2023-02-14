import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { ADMIN, BRANDS, CATEGORIES, LOGIN, LOGOUT, MANAGE_EMPLOYEE, MY_CART, MY_PROFILE, PROMOTIONS, SUPER_USER } from '../config/constant';
import { getAccessToken } from '../utils/local-storage';
import { logout } from '../redux/auth-action';

export default function HamburgerList({ isHambugerListShow, onClose }) {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const role = authenticatedUser?.Employee?.role;

    const dispatch = useDispatch();

    const items = [
        { label: PROMOTIONS, target: '/promotions' },
        { label: BRANDS, target: '/brands' },
        { label: CATEGORIES, target: '/categories' },
        { label: MY_CART, target: '/user/cart' }
    ];

    // for all user
    if (getAccessToken()) {
        items.push({ label: MY_PROFILE, target: '/user/profile' });
        items.push({ label: LOGOUT, target: '/' });

        // for ADMIN and SUPER_USER
        if ([ADMIN, SUPER_USER].includes(role)) {
        }

        // for SUPER_USER only
        if (role === SUPER_USER) {
            items.push({ label: MANAGE_EMPLOYEE, target: '/super-user/employees' })
        }
    } else {
        items.push({ label: LOGIN, target: '/login' });
    }

    const handleOnClickLink = e => {
        if (e.target.getAttribute('name') === LOGOUT) { dispatch(logout()) }
        onClose();
    };

    const ListItems = items.map((item, idx) => (
        <Link key={idx} to={item.target}>
            <div key={idx} name={item.label} onClick={handleOnClickLink} className={`px-7 py-3 w-full border ${idx === items.length - 1 ? 'rounded-b-lg' : ''} border-my-gray-1 bg-my-gray-2 text-left`}>
                {item.label}
            </div>
        </Link>
    ));

    return (
        <div className="absolute w-3/4 top-16 left-0 text-base rounded-lg bor">
            {isHambugerListShow && ListItems}
        </div>

    );
};
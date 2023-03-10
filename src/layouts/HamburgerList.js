import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { ADMIN, BRANDS, CATEGORIES, LOGIN, LOGOUT, MANAGE_EMPLOYEE, MANAGE_ORDER, MY_CART, MY_ORDER, MY_PROFILE, PROMOTIONS, SUPER_USER } from '../config/constant';
import { getAccessToken } from '../utils/local-storage';
import { logout } from '../redux/auth-action';

export default function HamburgerList({ isHambugerListShow, onClose }) {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const myOrders = useSelector(state => state.user.orders);
    const allOrders = useSelector(state => state.admin.orders);
    const role = authenticatedUser?.Employee?.role;
    const dispatch = useDispatch();

    const items = [
        { label: PROMOTIONS, target: '/promotions' },
        { label: BRANDS, target: '/brands' },
        { label: CATEGORIES, target: '/categories' },
        { label: MY_CART, target: '/user/cart' }
    ];

    const cartItems = useSelector(state => state.user.cart);

    // for all user
    if (getAccessToken()) {
        myOrders.length !== 0 && items.push({ label: MY_ORDER, target: '/user/orders' })
        // items.push({ label: MY_PROFILE, target: '/user/profile' });
        items.push({ label: LOGOUT, target: '/' });

        // for ADMIN and SUPER_USER
        if ([ADMIN, SUPER_USER].includes(role)) {
            items.push({ label: MANAGE_ORDER, target: '/admin/orders' });
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
            <div key={idx} name={item.label} onClick={handleOnClickLink} className={`flex justify-between px-7 py-3 w-full border ${idx === items.length - 1 ? 'rounded-b-lg' : ''} border-my-gray-1 bg-my-gray-2 text-left`}>
                <div>
                    {item.label}
                </div>
                {item.label === MY_CART && cartItems.length !== 0
                    ? <div className='bg-my-mint text-my-gray-2 text-center font-bold w-6 rounded-full'>
                        {cartItems.length}
                    </div>
                    : null}
                {item.label === MY_ORDER && myOrders.length !== 0
                    ? <div className='bg-yellow-200 text-my-gray-2 text-center font-bold w-6 rounded-full'>
                        {myOrders.length}
                    </div>
                    : null}
                {item.label === MANAGE_ORDER && allOrders.length !== 0
                    ? <div className='bg-pink-300 text-my-gray-2 text-center font-bold w-6 rounded-full'>
                        {allOrders.length}
                    </div>
                    : null}
            </div>
        </Link>
    ));

    return (
        <div className="absolute w-3/4 top-16 left-0 text-base rounded-lg bor">
            {isHambugerListShow && ListItems}
        </div>

    );
};
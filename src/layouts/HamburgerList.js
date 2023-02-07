import { Link } from 'react-router-dom'

export default function HamburgerList({ isHambugerListShow, onClose }) {
    const items = [
        { label: 'PROMOTIONS', target: '/promotions' },
        { label: 'BRAND', target: '/brands' },
        { label: 'CATEGORIES', target: '/categories' },
        { label: 'MY CART', target: '/user/cart' },
        { label: 'LOGIN', target: '/login' }
    ];

    const ListItems = items.map((item, idx) => (
        <Link key={idx} to={item.target}>
            <div key={idx} onClick={onClose} className={`px-7 py-3 w-full border border-1 ${idx === 0 ? '' : 'border-t-0'} border-[#D9D9D9] bg-[#767676] text-left`}>
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
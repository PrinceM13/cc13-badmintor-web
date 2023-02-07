export default function HamburgerList({ isHambugerListShow }) {
    const items = ['PROMOTIONS', 'BRAND', 'CATEGORIES', 'MY CART', 'LOGIN'];

    const ListItems = items.map((item, idx) => (
        <div key={idx} className={`px-7 py-3 w-3/4 border border-1 ${idx === 0 ? '' : 'border-t-0'} border-[#D9D9D9] bg-[#767676] text-left`} >
            {item}
        </div>
    ));

    return (
        <div className="absolute w-full top-16 left-0 text-base">
            {isHambugerListShow && ListItems}
        </div>

    );
};
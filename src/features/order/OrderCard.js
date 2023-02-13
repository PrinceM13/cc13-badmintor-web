export default function OrderCard({ name, totalPrice, idx, last }) {
    let borderStyle = '';
    if (idx === 0) { borderStyle = 'rounded-t-lg' }
    if (idx === last) { borderStyle = 'rounded-b-lg' }

    return (
        <div className={`flex justify-between w-full gap-4 border border-my-gray-1 px-4 py-2 ${borderStyle}`}>
            <div>
                {name}
            </div>
            <div className="text-my-mint">
                {totalPrice}
            </div>
        </div>
    );
};
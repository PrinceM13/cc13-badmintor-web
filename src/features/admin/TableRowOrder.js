export default function TableRowOrder({ children, idx }) {
    return (
        <>
            {
                idx === 0
                    ? <th scope="row" className="px-6 py-4 font-medium text-my-gray-1 whitespace-nowrap">
                        {children}
                    </th>
                    : <td className={`${idx !== 1 ? '' : children === 'PICKUP' ? 'text-yellow-400' : 'text-blue-400'} px-6 py-4 text-my-gray-1`}>
                        {children}
                    </td>
            }
        </>
    );
};
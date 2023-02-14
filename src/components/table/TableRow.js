export default function TableRow({ children, idx }) {
    return (
        <>
            {
                idx === 0
                    ? <th scope="row" className="px-6 py-4 font-medium text-my-gray-1 whitespace-nowrap">
                        {children}
                    </th>
                    : <td className="px-6 py-4 text-my-gray-1">
                        {children}
                    </td>
            }
        </>
    );
};
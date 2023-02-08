export default function TableRow({ children, idx }) {
    return (
        <>
            {
                idx === 0
                    ? <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {children}
                    </th>
                    : <td className="px-6 py-4">
                        {children}
                    </td>
            }
        </>
    );
};
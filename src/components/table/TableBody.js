import TableRow from "./TableRow";

export default function TableBody({ tableBody, needEditColumn }) {
    const editColumn = <>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </>

    return (
        <tbody>
            {
                tableBody.map((row, idxRow) => (
                    <tr key={idxRow} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {row.map((el, idx) => (<TableRow key={idxRow + idx} idx={idx} >{el}</TableRow>))}
                        {needEditColumn && editColumn}
                    </tr>
                ))
            }
        </tbody>
    );
};
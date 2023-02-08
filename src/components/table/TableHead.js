export default function TableHead({ tableHead, needEditColumn }) {
    const editColumn = <>
        <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
        </th>
    </>

    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {tableHead.map((el, idx) => (<th key={idx} scope="col" className="px-6 py-3">{el}</th>))}
                {needEditColumn && editColumn}
            </tr>
        </thead>
    );
};
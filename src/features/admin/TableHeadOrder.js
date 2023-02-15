export default function TableHeadOrder({ tableHead, needEditColumn }) {
    const editColumn = <>
        <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
        </th>
    </>

    return (
        <thead className="text-xs text-my-gray-1 uppercase bg-my-gray-2">
            <tr>
                {tableHead.map((el, idx) => (<th key={idx} scope="col" className="px-6 py-3">{el}</th>))}
                {needEditColumn && editColumn}
            </tr>
        </thead>
    );
};
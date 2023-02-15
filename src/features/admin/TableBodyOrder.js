import Button from "../../components/Button";
import TableRowOrder from "./TableRowOrder";

export default function TableBodyOrder({ tableBody, needEditColumn, mapObjOrders, setCurrentUser, setOnUpdate }) {

    const handleUpdateClick = (orderId, status, isPickup) => {
        setCurrentUser({ orderId, status, isPickup });
        setOnUpdate();
    }

    return (
        <>
            <tbody>
                {
                    tableBody.map((row, idxRow) => {
                        return <tr key={idxRow} className={`bg-transparent ${idxRow === tableBody.length - 1 ? '' : 'border-b'} border-my-gray-2 hover:bg-my-gray-3`}>
                            {row.map((el, idx) => (<TableRowOrder key={idxRow + idx} idx={idx} last={row.length - 1} >{el}</TableRowOrder>))}
                            {needEditColumn && <td className="px-2 py-4">
                                <div className="flex flex-col md:flex-row justify-center items-center md:justify-end gap-2 md:gap-4">
                                    <div onClick={() => handleUpdateClick(mapObjOrders[idxRow].orderId, mapObjOrders[idxRow].status, mapObjOrders[idxRow].isPickup)}>
                                        <Button size="text-xs">Update</Button>
                                    </div>
                                </div>
                            </td>}
                        </tr>
                    })
                }
            </tbody>
        </>
    );
};
import { useSelector } from "react-redux";

import Button from "../Button";
import TableRow from "./TableRow";

export default function TableBody({ tableBody, needEditColumn, tableBodyEmployeeId, setDeleteUser, setOnDelete }) {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const handleDelClick = (employeeId, name, userId) => {
        setDeleteUser({ employeeId, name, userId });
        setOnDelete();
    }

    return (
        <>
            <tbody>
                {
                    tableBody.map((row, idxRow) => {
                        return <tr key={idxRow} className={`bg-transparent ${idxRow === tableBody.length - 1 ? '' : 'border-b'} border-my-gray-2 hover:bg-my-gray-3`}>
                            {row.map((el, idx) => (<TableRow key={idxRow + idx} idx={idx} last={row.length - 1} >{el}</TableRow>))}
                            {needEditColumn && authenticatedUser.id !== tableBodyEmployeeId[idxRow].userId && <td className="px-2 py-4">
                                <div className="flex flex-col md:flex-row justify-center items-center md:justify-end gap-2 md:gap-4">
                                    <div>
                                        <Button size="text-xs" theme="my-gray-1">Edit</Button>
                                    </div>
                                    <div onClick={() => handleDelClick(tableBodyEmployeeId[idxRow].employeeId, row[0], tableBodyEmployeeId[idxRow].userId)}>
                                        <Button size="text-xs" theme="red-400" >Del</Button>
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
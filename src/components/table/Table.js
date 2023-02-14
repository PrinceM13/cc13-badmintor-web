import Modal from '../Modal';
import { useState } from "react";
import AddRow from "./AddRow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import AddEmployeeForm from '../../features/super-user/AddEmployeeForm';

export default function Table({ tableHead = [], tableBody = [], needEditColumn = true }) {
    // const tableHead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    // const tableBody = [
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4']
    // ];

    const [isOpen, setIsOpen] = useState(false);

    const isDataValid = tableHead.length !== 0 && tableHead.length !== 0;
    const handleAddButton = () => {
        setIsOpen(!isOpen);
    };

    const table = <>
        <div className="flex flex-col gap-4">
            <AddRow onClick={handleAddButton} />
            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
                    <TableHead tableHead={tableHead} needEditColumn={needEditColumn} />
                    <TableBody tableBody={tableBody} needEditColumn={needEditColumn} />
                </table>
            </div>
        </div>
        <Modal title='ADD NEW EMPLOYEE' isOpen={isOpen} onClose={() => setIsOpen(false)} titleSize='text-lg md:text-2xl' >
            <AddEmployeeForm onClose={() => setIsOpen(false)} />
        </Modal>
    </>

    return (
        <>
            {isDataValid && table}
        </>
    );
};
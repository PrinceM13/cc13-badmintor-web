import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { useState } from "react";
import AddRow from "./AddRow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import AddEmployeeForm from '../../features/super-user/AddEmployeeForm';
import DeleteEmployeeAlert from '../../features/super-user/DeleteEmployeeAlert';
import { getAllUser } from '../../redux/admin-action';
import EditEmployeeForm from '../../features/super-user/EditEmployeeForm';

export default function Table({ tableHead = [], tableBody = [], needEditColumn = true, tableBodyEmployeeId }) {
    // const tableHead = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
    // const tableBody = [
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4'],
    //     ['Code Camp13', 'Row 2', 'Row 3', 'Row 4']
    // ];

    const users = useSelector(state => state.admin.users);
    const [currentUsers, setCurrentUsers] = useState(users);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getAllUser()) }, []);
    useEffect(() => { setCurrentUsers(users) }, [users]);

    const [onAdd, setOnAdd] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const [deleteUser, setDeleteUser] = useState({});

    const isDataValid = tableHead.length !== 0 && tableHead.length !== 0;

    const table = <>
        <div className="flex flex-col gap-4 rounded-lg">
            <AddRow onClick={() => { setOnAdd(true) }} />
            <div className="overflow-x-auto shadow-md rounded-lg border border-my-gray-2">
                <table className="w-full text-xs text-left">
                    <TableHead tableHead={tableHead} needEditColumn={needEditColumn} />
                    <TableBody
                        tableBody={tableBody}
                        needEditColumn={needEditColumn}
                        tableBodyEmployeeId={tableBodyEmployeeId}
                        setDeleteUser={setDeleteUser}
                        setOnDelete={() => { setOnDelete(true) }}
                        setOnEdit={() => { setOnEdit(true) }}
                    />
                </table>
            </div>
        </div>
        <Modal title='ADD NEW EMPLOYEE' isOpen={onAdd} onClose={() => setOnAdd(false)} titleSize='text-lg md:text-2xl' >
            <AddEmployeeForm onClose={() => setOnAdd(false)} currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
        </Modal>
        <Modal title='CAUTION !!!' isOpen={onDelete} onClose={() => setOnDelete(false)} titleSize='text-xl md:text-3xl text-yellow-400'>
            <DeleteEmployeeAlert deleteUser={deleteUser} onClose={() => setOnDelete(false)} currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
        </Modal>
        <Modal title='UPDATE EMPLOYEE' isOpen={onEdit} onClose={() => setOnEdit(false)} titleSize='text-xl md:text-3xl text-my-mint'>
            <EditEmployeeForm deleteUser={deleteUser} onClose={() => setOnEdit(false)} currentUsers={currentUsers} setCurrentUsers={setCurrentUsers} />
        </Modal>
    </>

    return (
        <>
            {isDataValid && table}
        </>
    );
};
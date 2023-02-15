import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/Modal';
import { useState } from "react";
import { getAllUser } from '../../redux/admin-action';
import TableHeadOrder from './TableHeadOrder';
import TableBodyOrder from './TableBodyOrder';
import UpdateOrderForm from './UpdateOrderForm';

export default function TableOrder({ tableHead = [], tableBody = [], needEditColumn = true, mapObjOrders }) {
    const users = useSelector(state => state.admin.users);
    const [currentUsers, setCurrentUsers] = useState(users);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getAllUser()) }, []);
    useEffect(() => { setCurrentUsers(users) }, [users]);

    const [onUpdate, setOnUpdate] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const isDataValid = tableHead.length !== 0 && tableHead.length !== 0;

    const table = <>
        <div className="flex flex-col gap-4 rounded-lg">
            <div className="overflow-x-auto shadow-md rounded-lg border border-my-gray-2">
                <table className="w-full text-xs text-left">
                    <TableHeadOrder tableHead={tableHead} needEditColumn={needEditColumn} />
                    <TableBodyOrder
                        tableBody={tableBody}
                        needEditColumn={needEditColumn}
                        mapObjOrders={mapObjOrders}
                        setCurrentUser={setCurrentUser}
                        setOnUpdate={() => { setOnUpdate(true) }}
                    />
                </table>
            </div>
        </div>
        <Modal title='UPDATE EMPLOYEE' isOpen={onUpdate} onClose={() => setOnUpdate(false)} titleSize='text-xl md:text-3xl text-my-mint'>
            <UpdateOrderForm currentUser={currentUser} onClose={() => setOnUpdate(false)} />
        </Modal>
    </>

    return (
        <>
            {isDataValid && table}
        </>
    );
};
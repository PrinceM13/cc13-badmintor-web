import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import PageTitle from "../../components/PageTitile";
import { ADMIN, SUPER_USER } from "../../config/constant";
import { updateEmployeeWithId } from "../../redux/super-user-action";


export default function EditEmployeeForm({ onClose, deleteUser, currentUsers, setCurrentUsers }) {
    const initialInput = 'OTHER';

    const [role, setRole] = useState(initialInput);
    const dispatch = useDispatch();

    const handleChangeInput = e => setRole(e.target.value);

    const handleConfirm = () => {
        if (!role && role === 'OTHER') { onClose() }
        dispatch(updateEmployeeWithId(deleteUser.employeeId, role));
        // update front-end dropdown
        const tempArray = currentUsers.map(user => user.id === deleteUser.userId ? { ...user, Employee: { role } } : user);
        setCurrentUsers(tempArray);
        setRole(initialInput);
        onClose();
    }

    return (
        <>
            <PageTitle>Update <span className="text-my-mint">{deleteUser.name}</span> Role</PageTitle>
            <select
                value={role}
                name="role"
                onChange={handleChangeInput}
                className="text-sm md:text-lg bg-my-gray-3 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full p-2.5"
            >
                {deleteUser.role !== ADMIN && <option value={ADMIN}>{ADMIN}</option>}
                {deleteUser.role !== SUPER_USER && <option value={SUPER_USER}>{SUPER_USER}</option>}
                <option value='OTHER'>OTHER</option>
            </select>
            <div className="flex justify-end gap-4">
                <div type='button' onClick={handleConfirm}>
                    <Button size="text-xs">UPDATE</Button>
                </div>
                <div type='button' onClick={onClose}>
                    <Button size="text-xs" theme="my-gray-1">CANCEL</Button>
                </div>
            </div>
        </>
    );
};
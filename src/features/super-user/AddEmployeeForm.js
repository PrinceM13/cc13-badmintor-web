import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import VerticalSpace from "../../components/VerticalSpace";
import { ADMIN, SUPER_USER } from "../../config/constant";
import { addEmployeeWithRole } from "../../redux/super-user-action";

const initialInput = { userId: 0, role: 'ADMIN' };

export default function AddEmployeeForm({ onClose, currentUsers, setCurrentUsers }) {
    const [input, setInput] = useState(initialInput);
    const dispatch = useDispatch();

    const handleChangeInput = e => { setInput({ ...input, [e.target.name]: e.target.value }) };

    const handleSubmitForm = async e => {
        e.preventDefault();
        dispatch(addEmployeeWithRole(input));
        setInput(initialInput);
        // update front-end dropdown
        const tempArray = currentUsers.map(user => (user.id === +input.userId ? { ...user, Employee: { role: input.role } } : user));
        setCurrentUsers(tempArray);
        onClose();
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm} >
            <select
                value={input.userId}
                name="userId"
                onChange={handleChangeInput}
                className="text-sm md:text-lg bg-my-gray-3 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full p-2.5"
            >
                <option value='user'>- please select name -</option>
                {currentUsers.map(user => (
                    user.Employee ? null : <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
                ))}
            </select>
            <select
                value={input.role}
                name="role"
                onChange={handleChangeInput}
                className="text-sm md:text-lg bg-my-gray-3 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full p-2.5"
            >
                <option value={ADMIN}>{ADMIN}</option>
                <option value={SUPER_USER}>{SUPER_USER}</option>
            </select>
            <VerticalSpace />
            <div className="flex justify-end gap-4">
                <div onClick={handleSubmitForm}>
                    <Button size="text-xs">ADD NOW</Button>
                </div>
                <div type='button' onClick={onClose}>
                    <Button size="text-xs" theme="my-gray-1">CANCEL</Button>
                </div>
            </div>
        </form>
    );
};
import { useDispatch } from "react-redux";

import { deleteEmployeeWithId } from '../../redux/super-user-action';
import Button from "../../components/Button";
import PageTitile from '../../components/PageTitile';

export default function DeleteEmployeeAlert({ onClose, deleteUser, currentUsers, setCurrentUsers }) {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(deleteEmployeeWithId(deleteUser.employeeId));
        // update front-end dropdown
        const tempArray = currentUsers.map(user => (user.id === deleteUser.userId ? { ...user, Employee: null } : user));
        setCurrentUsers(tempArray);
        onClose();
    }

    return (
        <>
            <PageTitile>Remove <span className="text-yellow-400">{deleteUser.name}</span> from Employee list</PageTitile>
            <div className="flex justify-end gap-4">
                <div type='button' onClick={handleConfirm}>
                    <Button size="text-xs" theme="red-400">CONFIRM</Button>
                </div>
                <div type='button' onClick={onClose}>
                    <Button size="text-xs" theme="my-gray-1">CANCEL</Button>
                </div>
            </div>
        </>
    );
};
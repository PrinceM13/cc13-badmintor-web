import { useState } from "react";
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitile";
import { ORDER_COMPLETED, WAITING_FOR_PAYMENT, WAITING_FOR_SHIPPING } from "../../config/constant";


export default function UpdateOrderForm({ onClose, currentUser }) {
    const initialStatus = WAITING_FOR_PAYMENT;
    const [status, setStatus] = useState(initialStatus);
    const handleChangeInput = e => { setStatus(e.target.value) };

    const handleConfirm = () => {
        onClose();
    }

    return (
        <>
            <PageTitle>Update Order <span className="text-my-mint">{currentUser.orderId}</span> status</PageTitle>
            <select
                value={status}
                name="role"
                onChange={handleChangeInput}
                className="text-sm md:text-lg bg-my-gray-3 border border-my-gray-1 placeholder-my-gray-1 sm:text-sm rounded-lg focus:ring-my-mint focus:border-my-mint block w-full p-2.5"
            >
                <option value={WAITING_FOR_PAYMENT}>{WAITING_FOR_PAYMENT}</option>
                <option value={WAITING_FOR_SHIPPING}>{WAITING_FOR_SHIPPING}</option>
                <option value={ORDER_COMPLETED}>{ORDER_COMPLETED}</option>
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
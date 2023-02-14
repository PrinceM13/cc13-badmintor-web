import Button from "../Button";

export default function AddRow({ onClick }) {
    return (
        <div className="flex justify-between">
            {/* dummy div for justify-between */}
            <div className='invisible'></div>
            <div onClick={onClick}>
                <Button size="text-sm">Add Employee</Button>
            </div>
        </div>
    );
};
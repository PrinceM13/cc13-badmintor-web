import Button from "../Button";

export default function AddRow() {
    return (
        <div className="flex justify-between">
            {/* dummy div for justify-between */}
            <div className='invisible'></div>
            <Button size="text-sm">Add Employee</Button>
        </div>
    );
};
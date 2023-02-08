import Button from "./Button";

export default function ButtonPlusMinus() {
    return (
        <div className="flex flex-col gap-1 items-center">
            <Button theme="my-gray-1" size="text-2xl" p="px-2" width="" border="" >+</Button>
            <div className="text-center text-lg" >9</div>
            <Button theme="my-gray-1" size="text-2xl" p="px-2" width="" border="" >-</Button>
        </div>
    );
};
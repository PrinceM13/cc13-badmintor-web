import Button from "../../components/Button";

export default function InfoBox({ children, detail, isSelected = false }) {
    return (
        <div className={`flex flex-col justify-between w-full px-4 gap-4 ${isSelected ? 'border border-my-gray-1 rounded-lg py-4' : 'opacity-20'}`}>
            <div>{children}</div>
            <div className="text-xs h-full whitespace-pre-wrap px-6">{detail}</div>
            {isSelected && <div className="flex justify-end">
                <Button size="text-xs" theme="my-gray-1" p="px-2 py-1" >edit detail</Button>
            </div>}
        </div>
    );
}
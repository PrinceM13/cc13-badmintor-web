import Button from "../../components/Button";
import ButtonPlusMinus from "../../components/ButtonPlusMinus";
import ImageCard from "../../components/ImageCard";

export default function CartCard() {
    return (
        <div className="flex justify-between">
            <div className="flex justify-center items-center px-2 sm:px-5 md:px-10">
                <input type='checkbox' className="text-my-gray-2 bg-my-gray-4 focus:ring-my-gray-2 rounded-sm border-my-mint" />
            </div>
            <div className="flex gap-3 sm:gap-5 md:gap-10 basis-5/6 p-0 md:p-2">
                <div>
                    <ImageCard size='200' />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col gap-1">
                        <div>Badminton</div>
                        <div className="text-xs h-full">note: need green one with 34 lbs...</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="invisible"></div>
                        <Button size="text-xs" theme="my-gray-1" p="px-2 py-1" >edit note</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col basis-1/6 p-2">
                <ButtonPlusMinus />
            </div>
        </div>
    );
};
import { useDispatch } from 'react-redux';

import { setCartItemSelected } from '../../redux/user-slice';
import Button from "../../components/Button";
import ButtonPlusMinus from "../../components/ButtonPlusMinus";
import ImageCard from "../../components/ImageCard";
import VerticalSpace from "../../components/VerticalSpace";

export default function CartCard({ isFirst = false, img, name, note = '', price, netPrice, amount, productId, selected }) {
    const dispatch = useDispatch();
    const handleCheckboxChange = e => { dispatch(setCartItemSelected({ id: productId, selected: e.target.checked })) };

    return (
        <>
            {!isFirst && <VerticalSpace line={true} />}
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center px-2 sm:px-5 md:px-10">
                    <input
                        type='checkbox'
                        // checked={selected}
                        onChange={handleCheckboxChange}
                        className="text-my-gray-2 bg-my-gray-4 focus:ring-my-gray-2 rounded-sm border-my-mint"
                    />
                </div>
                <div className="flex items-center gap-3 sm:gap-5 md:gap-10 basis-5/6 p-0 md:p-2">
                    <div>
                        <ImageCard src={img} size='200' />
                    </div>
                    <div className="flex flex-col justify-between w-full gap-2">
                        <div className='md:text-xl'>{name}</div>
                        <div className="text-xs md:text-lg h-full">note: {note}</div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2 text-xs md:text-lg">
                                {price !== netPrice && <div className="line-through text-my-gray-2">{price}</div>}
                                <div className="text-my-mint">{netPrice}</div>
                            </div>
                            {/* <Button size="text-xs md:text-base" theme="my-gray-1" p="px-2 py-1" >edit note</Button> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col basis-1/6 p-2">
                    <ButtonPlusMinus amount={amount} productId={productId} />
                </div>
            </div>
        </>
    );
};
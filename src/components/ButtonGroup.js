import { useDispatch } from 'react-redux';

import { setIsPickup } from '../redux/user-slice';
import Button from './Button';

export default function ButtonGroup({ isSelectedFirstButton = true }) {
    const dispatch = useDispatch();

    return (
        <div className='flex'>
            <div className='basis-full' onClick={() => dispatch(setIsPickup(true))}>
                <Button width='w-full' theme="my-gray-1" rounded='rounded-l-full' needSolid={isSelectedFirstButton} opacity={!isSelectedFirstButton}>PICK-UP</Button>
            </div>
            <div className='basis-full' onClick={() => dispatch(setIsPickup(false))}>
                <Button width='w-full' theme="my-gray-1" rounded='rounded-r-full' needSolid={!isSelectedFirstButton} opacity={isSelectedFirstButton}>SHIP</Button>
            </div>
        </div>
    );
};
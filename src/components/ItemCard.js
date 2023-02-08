import { Link } from 'react-router-dom';

import { TargetIcon } from '../images/index';

export default function ItemCard({ children, image, needBg = false, needBorder = false }) {
    const ItemImage = <img className="rounded-t-lg" src={image} alt={children} />
    const setBgBorder = `${needBg ? 'bg-my-gray-2' : ''} ${needBorder ? 'border border-my-gray-1' : ''}`

    return (
        <div className={`flex flex-col gap-2 py-4 justify-center items-center w-[40%] sm:w-[220px] ${setBgBorder} rounded-lg shadow`}>
            <div className='w-3/4'>
                <Link to="#">
                    {image ? ItemImage : <TargetIcon size='100%' />}
                </Link>
            </div>
            <div>
                <Link to="#">
                    <h5 className="text-sm sm:text-xl font-bold tracking-tight">{children}</h5>
                </Link>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">detail</p> */}
            </div>
        </div>
    );
};
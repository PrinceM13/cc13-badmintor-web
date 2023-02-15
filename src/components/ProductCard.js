import { Link } from 'react-router-dom';

import { PingPongIcon } from '../images/index';

export default function ProductCard({ children, id, image }) {
    const needBg = true;
    const needBorder = true;

    const ItemImage = <img className="rounded-lg" src={image} alt={children} />;
    const setBgBorder = `${needBg ? 'bg-my-gray-3' : ''} ${needBorder ? 'border border-my-gray-1' : ''}`;
    const redirectPath = 'product-' + id;   // need to be string

    return (
        <div className={`flex flex-col gap-2 py-4 justify-center items-center w-[40%] sm:w-[220px] ${setBgBorder} rounded-lg shadow`}>
            <div className='flex justify-center w-3/4'>
                <Link to={redirectPath}>
                    {(image && image !== 'dummy') ? ItemImage : <PingPongIcon size='200px' />}
                </Link>
            </div>
            <div>
                <Link to={redirectPath}>
                    <h5 className="text-sm sm:text-xl font-bold tracking-tight">{children}</h5>
                </Link>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">detail</p> */}
            </div>
        </div>
    );
};
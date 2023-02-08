import { Link } from 'react-router-dom';

export default function Button({ children, size = 'text-base' }) {
    return (
        <Link to='#'>
            <button className={`bg-transparent hover:bg-my-mint text-my-mint ${size} font-semibold hover:text-my-gray-3 py-2 px-4 border border-my-mint hover:border-transparent rounded`}>
                {children}
            </button>
        </Link>
    );
};
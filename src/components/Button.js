import { Link } from 'react-router-dom';

export default function Button({ children, width = '', size = 'text-base', theme = 'my-mint', rounded = 'rounded-lg', p = 'py-2 px-4', border = 'border' }) {
    const colorTheme = `text-${theme} border-${theme} hover:bg-${theme}`

    return (
        <Link to='#'>
            <button className={`bg-transparent ${width} ${size} ${colorTheme} ${rounded} ${p} ${border} font-semibold hover:text-my-gray-3 hover:border-transparent`}>
                {children}
            </button>
        </Link>
    );
};
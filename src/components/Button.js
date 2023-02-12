import { Link } from 'react-router-dom';

export default function Button({ children, width = '', size = 'text-base', theme = 'my-mint', rounded = 'rounded-lg', p = 'py-2 px-4', border = 'border', needSolid = false, opacity = false }) {
    const colorTheme = `text-${theme} border-${theme} hover:bg-${theme} bg-transparent hover:text-my-gray-3 hover:border-transparent`
    const colorThemeSolid = `text-my-gray-3 border-transparent bg-${theme}`

    return (
        <Link to='#'>
            <button className={` ${width} ${size} ${needSolid ? colorThemeSolid : colorTheme} ${rounded} ${p} ${border} font-semibold ${opacity && 'opacity-20'} `}>
                {children}
            </button>
        </Link>
    );
};
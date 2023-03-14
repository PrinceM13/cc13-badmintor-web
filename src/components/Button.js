import { Link } from 'react-router-dom';

export default function Button({ children, id, onClick, type='submit', width = '', size = 'text-base', theme = 'my-mint', rounded = 'rounded-lg', p = 'py-2 px-4', border = 'border', needSolid = false, opacity = false }) {
    const myMint = `text-my-mint border-my-mint hover:bg-my-mint`;
    const myMint_solid = `text-my-gray-3 border-transparent bg-my-mint`;
    const myGray1 = `text-my-gray-1 border-my-gray-1 hover:bg-my-gray-1`;
    const myGray1_solid = `text-my-gray-3 border-transparent bg-my-gray-1`;
    const myGray2 = `text-my-gray-2 border-my-gray-2 hover:bg-my-gray-2`;
    const myGray2_solid = `text-my-gray-3 border-transparent bg-my-gray-2`;
    const danger = 'text-red-400 border-red-400 hover:bg-red-400';
    const danger_solid = `text-my-gray-3 border-transparent bg-red-400`;
    
    let colorTheme = '';
    let colorThemeSolid = '';

    if (theme === 'my-mint') {
        colorTheme = `${myMint} bg-transparent hover:text-my-gray-3 hover:border-transparent`;
        colorThemeSolid = myMint_solid;
    } else if (theme === 'my-gray-1') {
        colorTheme = `${myGray1} bg-transparent hover:text-my-gray-3 hover:border-transparent`;
        colorThemeSolid = myGray1_solid;
    } else if (theme === 'my-gray-2') {
        colorTheme = `${myGray2} bg-transparent hover:text-my-gray-3 hover:border-transparent`;
        colorThemeSolid = myGray2_solid;
    } else if (theme === 'danger') {
        colorTheme = `${danger} bg-transparent hover:text-my-gray-3 hover:border-transparent`;
        colorThemeSolid = danger_solid;
    }

    return (
        <Link to='#'>
            <button onClick={onClick} id={id} type={type} className={` ${width} ${size} ${needSolid ? colorThemeSolid : colorTheme} ${rounded} ${p} ${border} font-semibold ${opacity && 'opacity-20'} `}>
                {children}
            </button>
        </Link>
    );
};
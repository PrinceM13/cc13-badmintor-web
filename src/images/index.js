export function HamburgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
        </svg>
    );
};

export function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
        </svg>
    );
};

export function TargetIcon({ size = '24', color = 'none' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target-arrow" width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill={color} strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 7a5 5 0 1 0 5 5"></path>
            <path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path>
            <path d="M15 6v3h3l3 -3h-3v-3z"></path>
            <path d="M15 9l-3 3"></path>
        </svg>
    );
};

export function PingPongIcon({ size = '24', color = 'none' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ping-pong" width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12.718 20.713a7.64 7.64 0 0 1 -7.48 -12.755l.72 -.72a7.643 7.643 0 0 1 9.105 -1.283l2.387 -2.345a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-2.346 2.387a7.644 7.644 0 0 1 -1.052 8.864"></path>
            <path d="M14 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M9.3 5.3l9.4 9.4"></path>
        </svg>
    );
}
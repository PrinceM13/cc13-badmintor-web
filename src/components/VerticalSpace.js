export default function VerticalSpace({ line = false }) {
    return <hr className={`${line ? 'h-px bg-my-gray-1' : ''} my-4 border-0`}></hr>;
};
export default function ImageCard({ src, size }) {
    return (
        <img
            src={src !== 'dummy' && src || "https://picsum.photos/200"}
            className='rounded-xl'
            width={size}
            height={size}
        />
    );
};
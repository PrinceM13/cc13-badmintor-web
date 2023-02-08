import VerticalSpace from "./VerticalSpace";

export default function Modal({ children, title, isOpen, onClose }) {
    return (
        <>
            {/* background */}
            <div
                className={`${isOpen ? '' : 'hidden'} fixed top-0 left-0 w-full h-modal overflow-x-hidden overflow-y-auto bg-[#ffffffaa]`}
                onMouseDown={onClose}
            >
                {/* card */}
                <div
                    className="relative rounded-lg p-4 w-3/4 top-10 mx-auto bg-my-gray-3"
                    onMouseDown={e => e.stopPropagation()}
                >
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="text-3xl font-bold">{title}</div>
                        <VerticalSpace />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
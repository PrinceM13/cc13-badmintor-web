export default function ContentLayout({ children, clearPadding = false }) {
    return (
        <div className={`flex flex-col ${clearPadding ? '' : 'px-[5%] sm:px-[10%] md:px-[15%]'}`}>
            {children}
        </div>
    );
};
export default function ContentLayout({ children }) {
    return (
        <div className="flex flex-col px-[5%] sm:px-[10%] md:px-[15%]">
            {children}
        </div>
    );
};
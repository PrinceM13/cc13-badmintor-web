export default function ContentLayout({ children }) {
    return (
        <div className="flex flex-col px-[2%] sm:px-[5%] md:px-[10%]">
            {children}
        </div>
    );
};
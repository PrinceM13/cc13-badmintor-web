import VerticalSpace from "../components/VerticalSpace";

export default function ContentLayout({ children, clearPadding = false }) {
    return (
        <div className={`flex flex-col h-[92vh] overflow-auto ${clearPadding ? '' : 'px-[5%] sm:px-[10%] md:px-[15%]'}`}>
            {children}
            <VerticalSpace />
        </div>
    );
};
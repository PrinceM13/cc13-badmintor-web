import VerticalSpace from "./VerticalSpace";

export default function PageTitle({ children, size = 'text-lg sm:text-2xl' }) {
    return (<>
        <VerticalSpace />
        <div className={`${size}`}>{children}</div>
        <VerticalSpace />
    </>
    );
};
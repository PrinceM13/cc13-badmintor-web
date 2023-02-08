import VerticalSpace from "./VerticalSpace";

export default function PageTitle({ children }) {
    return (<>
        <VerticalSpace />
        <div className="text-lg sm:text-2xl">{children}</div>
        <VerticalSpace />
    </>
    );
};
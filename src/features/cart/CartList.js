import VerticalSpace from "../../components/VerticalSpace";
import CartCard from "./CartCard";

export default function CartList() {
    return (
        <div>
            <VerticalSpace line={true} />
            <CartCard />
            <VerticalSpace line={true} />
            <CartCard />
            <VerticalSpace line={true} />
            <CartCard />
            <VerticalSpace line={true} />
        </div>
    );
};
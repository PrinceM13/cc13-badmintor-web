import { useState } from "react";
import { useSelector } from "react-redux";

import ButtonGroup from "../../components/ButtonGroup";
import VerticalSpace from "../../components/VerticalSpace";
import InfoBox from "./InfoBox";

const InitialPickupDate = new Date();
InitialPickupDate.setDate(InitialPickupDate.getDate() + 1);
InitialPickupDate.setHours(10, 30, 0, 0);

export default function ShipOrPickup() {
    const [pickupDate, setPickupDate] = useState(InitialPickupDate);

    const userInfo = useSelector(state => state.user.profile);
    const userPhone = `${String(userInfo.phone).slice(0, 3)}-${String(userInfo.phone).slice(3, 7)}-${String(userInfo.phone).slice(7)}`

    const pickupDetail = `date: ${pickupDate.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
time: ${pickupDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
number: ${userPhone}`

    const shippingDetail = `name: ${userInfo.firstName} ${userInfo.lastName}
number: ${userPhone}
address: ${userInfo.address}
`

    return (
        <>
            <ButtonGroup />
            <VerticalSpace />
            <InfoBox detail={pickupDetail} isSelected={true}>pick-up detail:</InfoBox>
            <VerticalSpace />
            <InfoBox detail={shippingDetail}>shipping detail:</InfoBox>
        </>
    );
};
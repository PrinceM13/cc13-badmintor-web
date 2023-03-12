import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";
import { setOrders } from "../../redux/user-slice";

export default function OrderPage() {
    const myOrders = useSelector(state => state.user.orders);
    // const navigate = useNavigate();

    return (
        <>
            <PageTitle>MY ORDER</PageTitle>
            <div className="flex justify-center text-xs md:text-lg">
                <div className="flex flex-col gap-4 md:w-[80%] px-2 md:px-4">
                    {myOrders.map(el => {
                        const myDate = new Date(el.expectedDateTime);
                        return <div
                            key={el.id}
                            // onClick={() => navigate('/user/payment')}
                            // className='flex flex-col cursor-pointer gap-1 md:gap-2 p-2 md:py-4 md:px-8 rounded-lg border border-my-gray-1'
                            className='flex flex-col gap-1 md:gap-2 p-2 md:py-4 md:px-8 rounded-lg border border-my-gray-1'
                        >
                            <div className="flex">
                                <div className="w-1/5">{`oder id`}</div>
                                <div className="w-4/5">{el.id}</div>
                            </div>
                            <div className="flex">
                                <div className="w-1/5">{`status`}</div>
                                <div className="w-4/5 text-yellow-400">{el.status}</div>
                            </div>
                            {
                                el.isPickup
                                    ? <div className="flex">
                                        <div className="w-1/5">{`pickup`}</div>
                                        <div className="w-4/5">{myDate.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                    </div>
                                    : <div className="flex">
                                        <div className="w-1/5">{`ship to`}</div>
                                        <div className="w-4/5">{el.address}</div>
                                    </div>
                            }
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}
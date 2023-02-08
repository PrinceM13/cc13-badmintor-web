import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { PROMOTIONS } from "../../config/constant";
import PageTitle from "../../components/PageTitile";

export default function PromotionPage() {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await visitorApi.getAllPromotion();
            setPromotions(res.data.records);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col px-[10%]">
            <PageTitle>{PROMOTIONS}</PageTitle>
            <ItemList items={promotions} keyToShow={'discount'} needBg={true} needBorder={true} />
        </div>
    );
};
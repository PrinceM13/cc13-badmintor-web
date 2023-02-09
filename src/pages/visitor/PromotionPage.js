import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { PROMOTIONS } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";

export default function PromotionPage() {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await visitorApi.getAllPromotions();
            setPromotions(res.data.products);
        }
        fetchData();
    }, []);

    return (
        <ContentLayout>
            <PageTitle>{PROMOTIONS}</PageTitle>
            <ItemList items={promotions} noLink={true} keyToShow={'name'} needBg={true} needBorder={true} />
        </ContentLayout>
    );
};
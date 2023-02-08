import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { BRANDS } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";

export default function BrandPage() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await visitorApi.getAllBrand();
            setBrands(res.data.records);
        }
        fetchData();
    }, []);

    return (
        <ContentLayout>
            <PageTitle>{BRANDS}</PageTitle>
            <ItemList items={brands} keyToShow={'brand'} />
        </ContentLayout>
    );
};
import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { BRANDS } from "../../config/constant";
import PageTitle from "../../components/PageTitile";

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
        // <div>Brand Page</div>
        <div className="flex flex-col px-[10%]">
            <PageTitle>{BRANDS}</PageTitle>
            <ItemList items={brands} keyToShow={'brand'} />
        </div>
    );
};
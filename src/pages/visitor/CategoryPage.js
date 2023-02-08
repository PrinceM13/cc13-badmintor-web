import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { CATEGORIES } from "../../config/constant";
import PageTitle from "../../components/PageTitile";

export default function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await visitorApi.getAllCategory();
            setCategories(res.data.records);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col px-[10%]">
            <PageTitle>{CATEGORIES}</PageTitle>
            <ItemList items={categories} keyToShow={'category'} />
        </div>
    );
};
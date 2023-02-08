import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import ItemList from "../../components/ItemList";
import { CATEGORIES } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";

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
        <ContentLayout>
            <PageTitle>{CATEGORIES}</PageTitle>
            <ItemList items={categories} keyToShow={'category'} />
        </ContentLayout>
    );
};
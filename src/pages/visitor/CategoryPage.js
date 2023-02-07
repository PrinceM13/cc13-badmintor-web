import { useEffect, useState } from "react";

import * as visitorApi from '../../apis/visitor-api';
import VerticalSpace from "../../components/VerticalSpace";
import ItemList from "../../components/ItemList";
import { CATEGORIES } from "../../config/constant";

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
            <div className="text-lg md:text-2xl">{CATEGORIES}</div>
            <VerticalSpace />
            <ItemList items={categories} needBg={true} />
        </div>
    );
};
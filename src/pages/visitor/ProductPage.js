import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as visitorApi from '../../apis/visitor-api';
import ItemList from '../../components/ItemList';
import PageTitle from "../../components/PageTitile";
import { BRANDS, CATEGORIES, CATEGORY_ID, SUPPLIER_ID } from '../../config/constant';
import ContentLayout from '../../layouts/ContentLayout';

export default function ProductPage({ filterBy }) {
    const { filterId } = useParams();
    const [products, setProducts] = useState([]);

    let titleName;
    if (filterBy === CATEGORY_ID) { titleName = CATEGORIES }
    else if (filterBy === SUPPLIER_ID) { titleName = BRANDS }

    useEffect(() => {
        const fetchData = async () => {
            let res;
            if (filterBy === CATEGORY_ID) { res = await visitorApi.getAllProductsByCategoryId(filterId) }
            else if (filterBy === SUPPLIER_ID) { res = await visitorApi.getAllProductsByBrandId(filterId) }
            setProducts(res.data.products);
        }
        fetchData();
    }, []);

    return (
        <ContentLayout>
            <PageTitle>{titleName}</PageTitle>
            <ItemList items={products} noLink={true} keyToShow={'name'} needBg={true} needBorder={true} />
        </ContentLayout>
    );
};
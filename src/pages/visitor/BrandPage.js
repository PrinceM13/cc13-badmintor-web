import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllBrands } from '../../redux/visitor-action';
import ItemList from "../../components/ItemList";
import { BRANDS } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";

export default function BrandPage() {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.visitor.brands)

    useEffect(() => { dispatch(fetchAllBrands()) }, []);

    return (
        <ContentLayout>
            <PageTitle>{BRANDS}</PageTitle>
            <ItemList items={brands} keyToShow={'brand'} />
        </ContentLayout>
    );
};
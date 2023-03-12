import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllCategories } from '../../redux/visitor-action';
import ItemList from "../../components/ItemList";
import { CATEGORIES } from "../../config/constant";
import PageTitle from "../../components/PageTitile";
import ContentLayout from "../../layouts/ContentLayout";

export default function CategoryPage() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.visitor.categories);

    useEffect(() => { dispatch(fetchAllCategories()) }, []);

    return (
        <>
            <PageTitle>{CATEGORIES}</PageTitle>
            <ItemList items={categories} keyToShow={'category'} />
        </>
    );
};
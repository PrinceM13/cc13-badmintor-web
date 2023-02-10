import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProductsByBrandId, fetchAllProductsByCategoryId, fetchAllProductsWithPromotion } from '../../redux/visitor-action';
import ProductList from '../../components/ProductList';
import PageTitle from "../../components/PageTitile";
import { BRANDS, CATEGORIES, CATEGORY_ID, PROMOTIONS, SUPPLIER_ID } from '../../config/constant';
import ContentLayout from '../../layouts/ContentLayout';

export default function ProductPage({ filterBy }) {
    const { filterId } = useParams();
    const dispatch = useDispatch();

    let products;
    let titleName;
    if (filterBy === CATEGORY_ID) {
        titleName = CATEGORIES;
        products = useSelector(state => state.visitor.categoryProducts);
    }
    else if (filterBy === SUPPLIER_ID) {
        titleName = BRANDS
        products = useSelector(state => state.visitor.brandProducts);
    }
    else if (filterBy === PROMOTIONS) {
        titleName = PROMOTIONS
        products = useSelector(state => state.visitor.promotionProducts);
    }

    useEffect(() => {
        if (filterBy === CATEGORY_ID) { dispatch(fetchAllProductsByCategoryId(filterId)) }
        else if (filterBy === SUPPLIER_ID) { dispatch(fetchAllProductsByBrandId(filterId)) }
        else if (filterBy === PROMOTIONS) { dispatch(fetchAllProductsWithPromotion()) }
    }, [filterBy]); // need to add filter as trigger to fetch new data when change route (because Product Page is reuse-page)

    return (
        <ContentLayout>
            <PageTitle>{titleName}</PageTitle>
            <ProductList items={products} keyToShow={'name'} />
        </ContentLayout>
    );
};
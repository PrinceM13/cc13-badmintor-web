import { useParams } from 'react-router-dom';

import PageTitle from "../components/PageTitile";

export default function ProductPage({ filterBy }) {
    const { filterId } = useParams();
    return (
        <PageTitle>This is Product from {filterBy} id {filterId}</PageTitle>
    );
};
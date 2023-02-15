import Button from "../../components/Button";
import PageTitle from "../../components/PageTitile";
import VerticalSpace from "../../components/VerticalSpace";
import { PROMOTIONS } from "../../config/constant";
import ContentLayout from "../../layouts/ContentLayout";
import ProductPage from './ProductPage';

export default function HomePage() {
    const headerImage = 'https://res.cloudinary.com/dhr35jlbz/image/upload/v1676441139/badminter/dummy/pexels-jier-chen-7235235_bqhpds.jpg';

    return (
        <>
            <ContentLayout>
                <PageTitle>WELCOME TO BADMINTER</PageTitle>
                <div className="relative -z-10">
                    <div className="flex justify-center absolute bottom-5 md:bottom-10 left-[42%]">
                        <Button size="text-xs md:text-xl" p="px-2 py-1">LOGIN NOW</Button>
                    </div>
                    <img className="rounded-lg" src={headerImage}></img>
                </div>
                <VerticalSpace />
            </ContentLayout>
            <ProductPage filterBy={PROMOTIONS} />
        </>
    );
};
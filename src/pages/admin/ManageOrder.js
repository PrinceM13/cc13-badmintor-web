import PageTitle from "../../components/PageTitile";
import DisplayOrder from "../../features/admin/DisplayOrder";
import ContentLayout from "../../layouts/ContentLayout";

export default function ManageOrder() {
    return (
        <ContentLayout>
            <PageTitle>MANAGE ORDER</PageTitle>
            <DisplayOrder />
        </ContentLayout>
    );
};
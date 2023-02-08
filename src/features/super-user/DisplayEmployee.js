import Table from "../../components/table/Table";

export default function DisplayEmployee({ data }) {
    const tableHead = ['Name', 'Role'];
    const tableBody = data.map(el => [el.User.firstName, el.role]);

    return (
        <>
            <Table tableHead={tableHead} tableBody={tableBody} />
        </>
    );
};
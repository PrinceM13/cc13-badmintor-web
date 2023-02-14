import { useSelector } from "react-redux";
import Table from "../../components/table/Table";

export default function DisplayEmployee() {
    const data = useSelector(state => state.superUser.employees);
    const tableHead = ['Name', 'Role'];
    const tableBody = data?.map(el => [el.User.firstName, el.role]);

    return (
        <>
            <Table tableHead={tableHead} tableBody={tableBody} />
        </>
    );
};
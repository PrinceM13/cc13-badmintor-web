import { useEffect, useState } from 'react';

import * as superUserApi from '../../apis/super-user-api';
import PageTitle from '../../components/PageTitile';
import { MANAGE_EMPLOYEE } from '../../config/constant';
import DisplayEmployee from '../../features/super-user/DisplayEmployee';
import ContentLayout from '../../layouts/ContentLayout';

export default function ManageEmployee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await superUserApi.getAllEmployee();
            setEmployees(res.data.records);
        }
        fetchData();
    }, []);

    return (
        <ContentLayout>
            <PageTitle>{MANAGE_EMPLOYEE}</PageTitle>
            <DisplayEmployee data={employees} />
        </ContentLayout>
    );
};
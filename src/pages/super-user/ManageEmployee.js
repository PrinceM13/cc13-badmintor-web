import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as superUserApi from '../../apis/super-user-api';
import PageTitle from '../../components/PageTitile';
import { MANAGE_EMPLOYEE } from '../../config/constant';
import DisplayEmployee from '../../features/super-user/DisplayEmployee';
import ContentLayout from '../../layouts/ContentLayout';
import { getAllEmployee } from '../../redux/super-user-action';

export default function ManageEmployee() {
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getAllEmployee()) }, []);

    return (
        <>
            <PageTitle>{MANAGE_EMPLOYEE}</PageTitle>
            <DisplayEmployee />
        </>
    );
};
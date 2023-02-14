import * as superUserApi from '../apis/super-user-api';
import { setEmployees, addEmployee } from './super-user-slice';

export const getAllEmployee = () => async dispatch => {
    try {
        const res = await superUserApi.getAllEmployee();
        dispatch(setEmployees(res.data.records));
    } catch (err) {
        console.error(err);
    }
};

export const addEmployeeWithRole = employee => async dispatch => {
    try {
        const res = await superUserApi.addEmployee(employee);
        dispatch(addEmployee(res.data.addedRecord));
    } catch (err) {
        console.log(err);
    }
};
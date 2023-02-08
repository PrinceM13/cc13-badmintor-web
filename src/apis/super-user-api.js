import axios from "../config/axios";

export const addEmployee = input => axios.post('/super-user/employees', input);
export const getAllEmployee = () => axios.get('/super-user/employees');
export const updateEmployee = (employeeId, input) => axios.patch('/super-user/employees/' + employeeId, input);
export const deleteEmployee = employeeId => axios.delete('/super-user/employees/' + employeeId);
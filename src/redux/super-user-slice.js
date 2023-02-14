import { createSlice } from '@reduxjs/toolkit';

const superUserSlice = createSlice({
    name: 'superUser',
    initialState: { employees: [] },
    reducers: {
        setEmployees: (state, action) => { state.employees = action.payload },
        addEmployee: (state, action) => { state.employees = [...state.employees, action.payload] },
        deleteEmployee: (state, action) => { state.employees = state.employees.filter(el => el.id !== action.payload) },
        updateEmployee: (state, action) => { state.employees.map(el => { if (el.id === action.payload.employeeId) { el.role = action.payload.role } }) }
    }
});

export const { setEmployees, addEmployee, deleteEmployee, updateEmployee } = superUserSlice.actions;

export default superUserSlice.reducer;
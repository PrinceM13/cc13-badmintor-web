import { createSlice } from '@reduxjs/toolkit';

const superUserSlice = createSlice({
    name: 'superUser',
    initialState: { employees: [] },
    reducers: {
        setEmployees: (state, action) => { state.employees = action.payload },
        addEmployee: (state, action) => { state.employees = [...state.employees, action.payload] }
    }
});

export const { setEmployees, addEmployee } = superUserSlice.actions;

export default superUserSlice.reducer;
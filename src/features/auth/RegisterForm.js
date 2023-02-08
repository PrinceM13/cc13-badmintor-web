import { useState } from "react";

import * as authApi from '../../apis/auth-api'
import VerticalSpace from "../../components/VerticalSpace";
import LabelInput from "./LabelInput";

const initialInput = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    lineId: '',
    address: '',
    birthdate: '',
    password: '',
    confirmPassword: ''
};

export default function RegisterForm({ onClose }) {
    const [input, setInput] = useState(initialInput);

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async e => {
        e.preventDefault();
        // might need to validate data
        await authApi.register(input);
        setInput(initialInput);
        onClose();
    };

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm} >
            <LabelInput name='firstName' value={input.firstName} onChange={handleChangeInput} placeholder='first name' >First Name</LabelInput>
            <LabelInput name='lastName' value={input.lastName} onChange={handleChangeInput} placeholder='last name' >Last Name</LabelInput>
            <LabelInput name='phone' value={input.phone} onChange={handleChangeInput} placeholder='phone' >Phone</LabelInput>
            <LabelInput name='email' value={input.email} onChange={handleChangeInput} placeholder='email' type="email" >Email</LabelInput>
            <LabelInput name='lineId' value={input.lineId} onChange={handleChangeInput} placeholder='line id' required={false} >Line ID</LabelInput>
            <LabelInput name='address' value={input.address} onChange={handleChangeInput} placeholder='your address' >Address</LabelInput>
            <LabelInput name='birthdate' value={input.birthdate} onChange={handleChangeInput} type='date' >Birthdate</LabelInput>
            <LabelInput name='password' value={input.password} onChange={handleChangeInput} placeholder='••••••••' type='password' >Password</LabelInput>
            <LabelInput name='confirmPassword' value={input.confirmPassword} onChange={handleChangeInput} placeholder='••••••••' type='password' >Confirm Password</LabelInput>
            <VerticalSpace />
            <button type="submit" className="w-full border border-my-mint text-my-mint hover:bg-my-mint hover:text-my-gray-3 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
        </form>
    );
};
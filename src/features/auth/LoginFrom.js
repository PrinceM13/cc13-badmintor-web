import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/auth-action';
import { setPreviousPath } from '../../redux/visitor-slice';
import VerticalSpace from '../../components/VerticalSpace';
import LabelInput from './LabelInput';

export default function LoginForm() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isPreviousPathExist = useSelector(state => state.visitor.previousPath);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));   // request --> set access token --> ser auth user info
        // clean up
        setEmail('');
        setPassword('');
        // re-direct if from product-detail-page
        if (isPreviousPathExist) {
            dispatch(setPreviousPath(''));
            navigate(isPreviousPathExist);
        }
    }

    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <LabelInput type='email' name='emailLogin' value={email} onChange={e => setEmail(e.target.value)} placeholder='code@camp13.com' >Your email</LabelInput>
                <LabelInput type='password' name='passwordLogin' value={password} onChange={e => setPassword(e.target.value)} placeholder='••••••••' >Password</LabelInput>
                <VerticalSpace />
                <button type="submit" className="w-full border border-my-mint text-my-mint hover:bg-my-mint hover:text-my-gray-3 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
        </>
    );
}
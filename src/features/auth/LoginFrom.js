import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth-action';
import VerticalSpace from '../../components/VerticalSpace';
import LabelInput from './LabelInput';

export default function LoginForm() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));   // request --> set access token --> ser auth user info
        // clean up
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <LabelInput type='email' name='emailLogin' value={email} onChange={e => setEmail(e.target.value)} placeholder='code@camp13.com' >Your email</LabelInput>
                <LabelInput type='password' name='passwordLogin' value={password} onChange={e => setPassword(e.target.value)} placeholder='••••••••' >Password</LabelInput>

                {/* <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-my-gray-1">Remember me</label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-my-mint hover:underline">Forgot password?</a>
                </div> */}

                <VerticalSpace />

                <button type="submit" className="w-full border border-my-mint text-my-mint hover:bg-my-mint hover:text-my-gray-3 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
        </>
    );
}
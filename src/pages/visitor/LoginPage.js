import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth-slice'

import * as authApi from '../../apis/auth-api';
import { setAccessToken } from '../../utils/local-storage';

export default function LoginPage() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await authApi.login({ email, password });
        setAccessToken(res.data.accessToken);   // store accessToken in localStorage
        dispatch(login(res.data.accessToken));  // set authenticatedUser
        // clean up
        setEmail('');
        setPassword('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">email: </label>
                <input
                    className='border-2'
                    type='text'
                    id="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="password">password: </label>
                <input
                    className='border-2'
                    type='password'
                    id="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <button className='bg-slate-300 px-3'>Login</button>
        </form>
    );
};
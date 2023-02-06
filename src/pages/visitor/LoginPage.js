import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth-action'

export default function LoginPage() {
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
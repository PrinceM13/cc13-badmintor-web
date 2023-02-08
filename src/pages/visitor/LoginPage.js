import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';

import LoginForm from '../../features/auth/LoginFrom';
import RegisterForm from '../../features/auth/RegisterForm';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-between mx-auto px-6 py-10 gap-10 md:h-screen md:py-20">

            {/* login header */}

            <div className="w-full flex items-center justify-center text-center h-16 px-10 py-3 text-xl sm:text-2xl md:text-3xl">
                <div className='flex gap-4'>
                    <div className="font-rubik">
                        <Link to={'/'}>
                            BAD<span className="text-my-mint">MINT</span>OR
                        </Link>
                    </div>
                    <div>LOGIN</div>
                </div>
            </div>

            {/* login form */}

            <div className="w-full border border-my-gray-1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign in to your account
                    </h1>
                    <LoginForm />
                    <p className="text-sm font-light text-my-gray-2">
                        Don’t have an account yet? <span onClick={() => { }} className="font-medium text-white hover:underline">Sign up</span>
                    </p>
                </div>
                <Modal title='Register'>
                    <RegisterForm />
                </Modal>
            </div>

            {/* dummy div for justify-between */}
            <div className='invisible'></div>
        </div>
    );
};
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children, level = [] }) {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    const role = authenticatedUser?.Employee?.role;
    const isAuthorizedLevel = level.includes(role);
    console.log('----------> ',authenticatedUser)

    // all users
    if (!authenticatedUser) { return <Navigate to={'/login'} /> }

    // employee + level check
    if (level.length && !isAuthorizedLevel) { return <Navigate to={'/'} /> }

    return children;
}
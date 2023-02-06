import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
    const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
    if (!authenticatedUser) {
        return <Navigate to={'/login'} />
    }
    return children;
}

import { Navigate, useLocation } from 'react-router-dom';
import { useAuthGlobally } from '../Context/AuthProvider';



const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuthGlobally()
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;
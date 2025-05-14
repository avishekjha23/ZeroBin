import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isUserAuthenticated } = useAuth();
  const location = useLocation();

  // Redirect to login page if not authenticated
  if (!isUserAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AdminProtectedRoute = ({ children }) => {
  const { isAdminAuthenticated } = useAuth(); // or use separate context if you have
  const location = useLocation();

  if (!isAdminAuthenticated) {
    return <Navigate to="/adminlogin" state={{ from: location }} replace />;
  }

  return children;
};


const ProtectedRouteComponents = {
  ProtectedRoute,
  AdminProtectedRoute
};

export default ProtectedRouteComponents;
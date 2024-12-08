import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, redirectTo, allowedRoles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }
 
  if (allowedRoles && !allowedRoles.includes(role)) { 
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedRoute;

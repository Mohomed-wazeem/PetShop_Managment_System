import React from 'react';
import { Navigate } from 'React-router-dom';

const ProtectedRoute = ({ children, isAdminLoggedIn }) => {
  return isAdminLoggedIn ? children : <Navigate to="/AdminLogin" replace />;
};

export default ProtectedRoute;

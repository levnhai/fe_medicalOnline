import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, allowedRoles }) => {
  const location = useLocation();
  
  // Log the entire Redux state
  const entireState = useSelector(state => state);
  console.log('Entire Redux State:', entireState);

  // Safely access the user object
  const user = useSelector(state => {
    console.log('Accounts State:', state.accounts);
    return state.accounts ? state.accounts.user : null;
  });

  console.log('PrivateRoute - Current user:', user);
  console.log('PrivateRoute - Allowed roles:', allowedRoles);

  if (!user) {
    console.log('PrivateRoute - No user, redirecting to login');
    return <Navigate to="/account/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log('PrivateRoute - User not authorized, redirecting to home');
    return <Navigate to="/" replace />;
  }

  console.log('PrivateRoute - User authorized, rendering children');
  return children;
};

export default PrivateRoute;
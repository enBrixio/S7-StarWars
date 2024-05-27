// PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../store/slices/authSlice'; // Asegúrate de que la ruta sea correcta

const PrivateRoute = ({ element: Component }) => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;



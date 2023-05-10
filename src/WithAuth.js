import React from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token');

    if (!isAuthenticated) {
      navigate('/login');
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;

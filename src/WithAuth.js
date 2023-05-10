import React from 'react';
import { useRouter } from 'next/router';

function withAuth(Component) {
const router = useRouter();
  return function AuthenticatedComponent(props) {
    const token = localStorage.getItem('token');

    if (!token) {
        router.push('/login');
    }

    return <Component {...props} />;
  };
}

export default withAuth;


import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Login from '@/components/auth/Login';

const LoginPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-16 md:py-24 container mx-auto">
        <Login />
      </div>
    </Layout>
  );
};

export default LoginPage;

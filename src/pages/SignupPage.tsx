
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Signup from '@/components/auth/Signup';

const SignupPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-16 md:py-24 container mx-auto">
        <Signup />
      </div>
    </Layout>
  );
};

export default SignupPage;

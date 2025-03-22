
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 md:py-24 container mx-auto px-4 animate-fadeIn">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full bg-laundry-50 dark:bg-gray-800">
            <span className="text-4xl font-bold text-laundry-600 dark:text-laundry-400">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <Button size="lg" asChild>
            <Link to="/" className="flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

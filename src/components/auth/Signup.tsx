
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { ArrowRight, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast.error('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup delay
    setTimeout(() => {
      // Mock signup success
      toast.success('Account created successfully!', {
        description: 'Welcome to FreshPress. You can now log in.',
        duration: 5000,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Sign up and get started with FreshPress
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input 
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input 
                id="email"
                type="email"
                placeholder="your@email.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input 
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Must contain at least 8 characters, including a number and a special character
            </p>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm cursor-pointer">
              I agree to the <Link to="/terms" className="text-laundry-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-laundry-600 hover:underline">Privacy Policy</Link>
            </Label>
          </div>
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              <span className="flex items-center">
                Create account
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200 dark:border-gray-700"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.607,1.972-2.101,3.467-4.26,3.866c-3.431,0.635-6.862-1.865-7.19-5.519c-0.34-3.78,2.271-6.995,5.935-7.375c3.056-0.317,5.644,1.366,6.661,3.813h-4.591c-1.054,0-1.909,0.855-1.909,1.909L12.545,12.151L12.545,12.151z" fill="#EA4335"></path>
                <path d="M6,12.151L6,12.151c0-3.371,2.729-6.1,6.1-6.1h5.814v2.2H12.1c-2.149,0-3.891,1.742-3.891,3.891c0,2.149,1.742,3.891,3.891,3.891H17.4c0.02,0,0.038,0,0.057,0.002c0.645,0.037,1.245-0.344,1.519-0.926h-6.876c-2.156,0-3.9-1.744-3.9-3.9V12.151z" fill="#4285F4"></path>
                <path d="M23,11.051V8.851h-2.2v2.2H18.6v2.2h2.2v2.2H23v-2.2h2.2v-2.2H23z" fill="#FBBC05"></path>
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path d="M22,12c0-5.523-4.477-10-10-10S2,6.477,2,12c0,4.991,3.657,9.128,8.438,9.878V14.89h-2.54V12h2.54V9.797c0-2.506,1.492-3.89,3.777-3.89c1.094,0,2.238,0.195,2.238,0.195v2.46h-1.26c-1.243,0-1.63,0.771-1.63,1.562V12h2.773l-0.443,2.89h-2.33v6.988C18.343,21.128,22,16.991,22,12z" fill="#1877F2"></path>
                <path d="M16.673,14.89L17.115,12H14.342v-2.877c0-0.791,0.387-1.562,1.63-1.562h1.26V7.101c0,0-1.144-0.195-2.238-0.195c-2.285,0-3.777,1.384-3.777,3.89V12h-2.54v2.89h2.54v6.988C11.655,21.959,11.827,22,12,22s0.345-0.041,0.516-0.112V14.89H16.673z" fill="#FFFFFF"></path>
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-laundry-600 hover:text-laundry-500 dark:text-laundry-400 dark:hover:text-laundry-300">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Signup;

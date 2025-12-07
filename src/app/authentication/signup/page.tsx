'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/ui/AuthLayout';

export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);
    setMessage('');

    if (password !== confirmPassword) {
      setIsError(true);
      setMessage('Passwords do not match.');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setIsError(true);
      setMessage(error.message);
    } else {
      setIsError(false);
      setMessage('Success! Please check your email to verify your account.');
      setTimeout(() => router.push('/authentication/login'), 3000);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="mb-10 text-left">
          <h2 className="font-bold text-4xl text-blue-900">
            Create an Account
          </h2>
          <p className="text-gray-600 mt-3">
            Join us! Please enter your details to get started.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          {message && (
            <div
              className={`p-3 rounded-lg text-center text-sm ${
                isError
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {message}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="full-name" className="text-gray-700 font-semibold">
              Full Name
            </Label>
            <Input
              id="full-name"
              type="text"
              placeholder="e.g. Marie Curie"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-gray-700 font-semibold">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-white w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors text-base"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{' '}
          <Link href="/authentication/login" className="font-semibold text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
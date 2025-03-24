'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="sm:mx-4 max-w-md mx-auto p-6 border-2 border-gray-500 shadow-md rounded-lg">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            className="w-full px-4 py-2 border  focus:border-blue-600"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full px-4 py-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded cursor-pointer hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>

          <div className="flex justify-center">
            <span className="text-blue-300 cursor-pointer hover:text-blue-500 hover:underline">
              Forgot Password?
            </span>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <button className="w-full px-4 py-2 bg-green-700 text-white font-bold rounded cursor-pointer hover:bg-green-500 transition duration-300">
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
}

// app/page.tsx
'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import UserInfo from './components/UserInfo';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
      redirect('/auth/signin'); // Redirect to sign-in page if not authenticated
    }
  }, [session, status]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Calculator App</h1>
      <Link className="bg-blue-500 text-white p-4 rounded-lg" href="/calculate">
        Go to Calculator
      </Link>
      <UserInfo />
    </div>
  );
};

export default Home;

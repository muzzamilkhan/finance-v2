'use client';

import { useSession, signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export const UserInfo = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <Button onClick={() => signIn('google')}>
        Sign in
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {session.user?.image && (
        <img
          src={session.user.image}
          alt={session.user.name || 'User avatar'}
          className="w-8 h-8 rounded-full"
        />
      )}
      <div>
        <p className="font-medium text-gray-900">
          Welcome, {session.user?.name}
        </p>
        <p className="text-sm text-gray-500">
          {session.user?.email}
        </p>
      </div>
    </div>
  );
};

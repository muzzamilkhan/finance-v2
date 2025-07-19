'use client';

import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const NextAuthProvider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

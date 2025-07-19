'use client';

import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { UserInfo } from '@/components/auth/UserInfo';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <Container>
        <div className="py-8">
          <div className="mb-8">
            <UserInfo />
          </div>
          
          {session ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Financial Forecast</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Plan and visualize your future balance based on recurring transactions.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <p className="text-gray-600">Your financial dashboard will appear here.</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                Welcome to Finance Forecast
              </h1>
              <p className="text-gray-600 mb-8">
                Sign in to start managing your financial forecasts.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
}

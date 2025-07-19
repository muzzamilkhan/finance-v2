import Link from 'next/link';

import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Finance Forecast
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Dashboard
            </Link>
            <Link
              href="/admin"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

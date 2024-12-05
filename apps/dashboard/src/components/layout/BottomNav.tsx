'use client';

import { HomeIcon, ChartBarIcon, CogIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Chart', href: '/chart', icon: ChartBarIcon },
  { name: 'Trade', href: '/trade', icon: BanknotesIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800',
                isActive && 'text-blue-600 dark:text-blue-500'
              )}
            >
              <item.icon
                className={clsx(
                  'w-6 h-6',
                  isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'
                )}
                aria-hidden="true"
              />
              <span
                className={clsx(
                  'text-sm',
                  isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 
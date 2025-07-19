import type { FC, JSX, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';


interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full'
};

export const Container: FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  size = 'lg'
}) => {
  return (
    <Component
      className={twMerge(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidthClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export interface MenuItemProps {
  icon: JSX.Element;
  title: string;
  to?: string;
}

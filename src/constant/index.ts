import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

export interface MenuItemProps {
  icon?: JSX.Element;
  code?: string;
  title: string;
  to?: string;
  separate?: Boolean;
  children?: MenuItemProps[];
}

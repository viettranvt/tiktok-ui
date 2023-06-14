import { Fragment } from 'react';
import { LayoutProps } from '~/constant';

function NoneLayout({ children }: LayoutProps) {
  return <Fragment>{children}</Fragment>;
}

export default NoneLayout;

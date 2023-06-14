import { LayoutProps } from '~/constant';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <Sidebar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

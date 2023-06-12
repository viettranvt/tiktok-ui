import clsx from 'clsx';
import { LayoutProps } from '~/constant';
import styles from './Popper.module.scss';

function Wrapper({ children, className }: LayoutProps) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

export default Wrapper;

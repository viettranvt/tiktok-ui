import clsx from 'clsx';
import { LayoutProps } from '~/constant';
import styles from './Popper.module.scss';

function Wrapper({ children }: LayoutProps) {
  return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default Wrapper;

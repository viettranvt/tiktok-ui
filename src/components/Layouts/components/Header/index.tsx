import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        {/* logo */}
        {/* search */}
      </div>
    </header>
  );
}

export default Header;

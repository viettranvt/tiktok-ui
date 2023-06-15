import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

interface Props {
  to: string;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  title: string;
}

function MenuItem({ to, icon, title, activeIcon }: Props) {
  return (
    <NavLink
      className={(nav) =>
        clsx(styles['menu-item'], { [styles.active]: nav.isActive })
      }
      to={to}
    >
      {icon && <span className={clsx(styles.icon)}>{icon}</span>}
      {activeIcon && (
        <span className={clsx(styles['active-icon'])}>{activeIcon}</span>
      )}
      <span className={clsx(styles.title)}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;

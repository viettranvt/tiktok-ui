import clsx from 'clsx';
import { FC } from 'react';
import Button from '~/components/Button';
import { MenuItemProps } from '~/constant';
import styles from './Menu.module.scss';

interface Props {
  data: MenuItemProps;
  onClick: () => void;
}

const MenuItem: FC<Props> = ({ data, onClick }) => {
  return (
    <Button
      className={clsx(styles['menu-item'])}
      lefIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;

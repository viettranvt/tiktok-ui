import clsx from 'clsx';
import { FC } from 'react';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  title: string;
  onBack: () => void;
}

const Header: FC<Props> = ({ title, onBack }) => {
  return (
    <header className={clsx(styles.header)}>
      <button className={clsx(styles['back-btn'])} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft as IconProp} />
      </button>
      <h4 className={clsx(styles['head-title'])}>{title}</h4>
    </header>
  );
};

export default Header;

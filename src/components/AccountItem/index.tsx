import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import flower from '~/assets/images/Kuni_1616565154500.jpg';

const faCheckCircleIcon = faCheckCircle as IconProp;

function AccountItem() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img className={clsx(styles.avatar)} src={flower} alt="account_img" />
      <div className={clsx(styles.info)}>
        <h4 className={clsx(styles.name)}>
          <span>Nguyen Van a</span>
          <FontAwesomeIcon
            className={clsx(styles.check)}
            icon={faCheckCircleIcon}
          />
        </h4>
        <span className={clsx(styles.username)}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;

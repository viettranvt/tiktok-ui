import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const faCheckCircleIcon = faCheckCircle as IconProp;

function AccountItem() {
  return (
    <div className={clsx(styles.wrapper)}>
      <img
        className={clsx(styles.avatar)}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/1ec839855ed7874e7270f1780ff0311b~c5_100x100.jpeg?x-expires=1686488400&x-signature=Ij%2BijuXRsDbOk3FLfbHivGV%2FD2Q%3D"
        alt="account_img"
      />
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

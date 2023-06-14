import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image from '../Image';
import { UserDto } from '~/constant';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const faCheckCircleIcon = faCheckCircle as IconProp;

interface Props {
  data: UserDto;
}

function AccountItem({ data }: Props) {
  return (
    <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
      <Image
        className={clsx(styles.avatar)}
        src={data.avatar}
        alt="account_img"
      />
      <div className={clsx(styles.info)}>
        <h4 className={clsx(styles.name)}>
          <span>{data.full_name}</span>

          {data.tick && (
            <FontAwesomeIcon
              className={clsx(styles.check)}
              icon={faCheckCircleIcon}
            />
          )}
        </h4>
        <span className={clsx(styles.username)}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.prototype = {
  data: PropTypes.object,
};

export default AccountItem;

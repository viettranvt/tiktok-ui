import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import Image from '../Image';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountReview from '~/components/AccountReview';
import { UserDto } from '~/constant';

const cx = classNames.bind(styles);

interface Props {
  hideButtonFollow?: boolean;
  data: UserDto;
}

function AccountItem({ data, hideButtonFollow = false }: Props) {
  return (
    <Tippy
      interactive={true}
      offset={[-20, 0]}
      delay={[1000, 0]}
      placement="bottom"
      render={(attrs) => (
        <div tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <AccountReview hideButtonFollow={hideButtonFollow} data={data} />
          </PopperWrapper>
        </div>
      )}
    >
      <Link to={`/@${data.nickname}`} className={cx('account-item')}>
        <Image className={cx('avatar')} src={data.avatar} alt="account_img" />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>{data.nickname}</strong>
            {data.tick && (
              <FontAwesomeIcon
                className={cx('check')}
                icon={faCheckCircle as IconProp}
              />
            )}
          </p>
          <p className={cx('name')}>{data.full_name}</p>
        </div>
      </Link>
    </Tippy>
  );
}

export default AccountItem;

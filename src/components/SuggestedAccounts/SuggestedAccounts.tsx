import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import { UserDto } from '~/constant';
import { search } from '~/services/searchService';

const cx = classNames.bind(styles);

interface Props {
  label: string;
  hideButtonFollow?: boolean;
  keyWord: string;
}

function SuggestAccounts({ label, keyWord, hideButtonFollow = true }: Props) {
  const [accounts, setAccounts] = useState<UserDto[]>([]);

  useEffect(() => {
    const handle = async () => {
      const res = await search(keyWord);
      setAccounts(res);
    };

    handle();
  }, [keyWord]);

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {accounts.map((account) => (
        <AccountItem
          key={account.id}
          hideButtonFollow={hideButtonFollow}
          data={account}
        />
      ))}

      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

export default SuggestAccounts;

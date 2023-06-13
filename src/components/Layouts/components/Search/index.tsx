import styles from './Search.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { UserDto } from '~/constant';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request';

function Search() {
  const [searchResult, setSearchResult] = useState<UserDto[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     debounced,
    //   )}&type=less`,
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.data) {
    //       setSearchResult((res.data as UserDto[]) || []);
    //     }
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    const handle = async () => {
      try {
        const res = await request.get('users/search', {
          params: {
            q: debounced,
            type: 'less',
          },
        });

        if (res.data) {
          setSearchResult((res.data as UserDto[]) || []);
        }

        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    handle();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={clsx(styles['search-result'])} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={clsx(styles['search-title'])}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={clsx(styles.search)}>
        {/* search bar */}
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            setShowResult(true);
          }}
        />

        {/* btn clear */}
        {!!searchValue && !loading && (
          <button className={clsx(styles.clear)} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
          </button>
        )}

        {loading && (
          <FontAwesomeIcon
            className={clsx(styles.loading)}
            icon={faSpinner as IconProp}
          />
        )}

        {/* btn search */}
        <button className={clsx(styles['search-btn'])}>
          <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

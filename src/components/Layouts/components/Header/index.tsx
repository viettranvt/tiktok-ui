import images from '~/assets/images';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MenuItemProps } from '~/constant';

const MENU_ITEMS: MenuItemProps[] = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
    title: 'Language',
    children: [
      {
        code: 'en',
        title: 'English',
      },
      {
        code: 'vi',
        title: 'Viet Nam',
      },
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleMenuChange = (menuItem: MenuItemProps) => {
    console.log(menuItem);
  };

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        {/* logo */}
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        {/* search */}
        <Tippy
          interactive={true}
          render={(attrs) => (
            <div
              className={clsx(styles['search-result'])}
              tabIndex={-1}
              {...attrs}
            >
              <PopperWrapper>
                <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={clsx(styles.search)}>
            {/* search bar */}
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            {/* btn clear */}
            <button className={clsx(styles.clear)}>
              <FontAwesomeIcon icon={faCircleXmark as IconProp} />
            </button>
            <FontAwesomeIcon
              className={clsx(styles.loading)}
              icon={faSpinner as IconProp}
            />

            {/* btn search */}
            <button className={clsx(styles['search-btn'])}>
              <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
            </button>
          </div>
        </Tippy>
        <div className={styles.actions}>
          <Button
            type="text"
            lefIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}
          >
            Upload
          </Button>
          <Button type="primary">Login</Button>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <span className={clsx(styles['more-icon'])}>
              <FontAwesomeIcon icon={faEllipsisVertical as IconProp} />
            </span>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

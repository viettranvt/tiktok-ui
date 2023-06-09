import images from '~/assets/images';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MenuItemProps } from '~/constant';
import { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import Image from '../../../components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';

const NON_USER_MENU: MenuItemProps[] = [
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

const USER_MENU: MenuItemProps[] = [
  {
    icon: <FontAwesomeIcon icon={faUser as IconProp} />,
    title: 'View profile',
    to: '/@user',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins as IconProp} />,
    title: 'Get coins',
    to: '/coins',
  },
  {
    icon: <FontAwesomeIcon icon={faGear as IconProp} />,
    title: 'Settings',
    to: '/settings',
  },
  ...NON_USER_MENU,
  {
    icon: <FontAwesomeIcon icon={faSignOut as IconProp} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const handleMenuChange = (menuItem: MenuItemProps) => {
    console.log(menuItem);
  };
  const currentUser = true;

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        {/* logo */}
        <Link to={config.routes.home} className={clsx(styles.logo)}>
          <Image src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        {/* actions */}
        <div className={styles.actions}>
          {currentUser ? (
            <Fragment>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={clsx(styles['action-btn'])}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={clsx(styles['action-btn'])}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={clsx(styles['action-btn'])}>
                  <InboxIcon />
                  <span className={clsx(styles.badge)}>12</span>
                </button>
              </Tippy>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                type="text"
                lefIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}
              >
                Upload
              </Button>
              <Button type="primary">Login</Button>
            </Fragment>
          )}

          <Menu
            items={currentUser ? USER_MENU : NON_USER_MENU}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={clsx(styles['user-avatar'])}
                alt="nguyen van a"
                src={images.defaultImage}
              />
            ) : (
              <span className={clsx(styles['more-icon'])}>
                <FontAwesomeIcon icon={faEllipsisVertical as IconProp} />
              </span>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

import clsx from 'clsx';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import SuggestAccounts from '~/components/SuggestedAccounts';

function Sidebar() {
  return (
    <aside className={clsx(styles.wrapper)}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestAccounts
        keyWord={'le'}
        hideButtonFollow={false}
        label="Suggested accounts"
      />
      <SuggestAccounts keyWord={'ng'} label="Following accounts" />
    </aside>
  );
}

export default Sidebar;

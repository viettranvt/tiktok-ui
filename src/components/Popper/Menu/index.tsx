import clsx from 'clsx';
import Wrapper from '../Wrapper';
import { FC, useState } from 'react';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import { MenuItemProps } from '~/constant';

interface Props {
  children: JSX.Element;
  items: MenuItemProps[];
  onChange?: (item: MenuItemProps) => void;
}

interface History {
  data: MenuItemProps[];
}

const Menu: FC<Props> = ({ children, items, onChange }) => {
  const [history, setHistory] = useState<History[]>([{ data: items }]);
  const current = history[history.length - 1];
  const handleClick = (item: MenuItemProps) => {
    if (!!item.children) {
      const data: History = {
        data: item.children,
      };
      setHistory((prev) => [...prev, data]);
      return;
    }

    if (onChange) {
      onChange(item);
    }
  };

  const renderItems = () => {
    return current.data.map((item, index) => {
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            handleClick(item);
          }}
        ></MenuItem>
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  // Reset to first page;
  const handlerResetMenu = () => setHistory((prev) => prev.slice(0, 1));

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <Tippy
        delay={[0, 500]}
        offset={[12, 8]}
        interactive
        placement="bottom-end"
        onHide={handlerResetMenu}
        hideOnClick={false}
        render={(attrs) => (
          <div
            className={clsx(styles['menu-item-list'])}
            tabIndex={-1}
            {...attrs}
          >
            <Wrapper className={clsx(styles['menu-wrapper'])}>
              {history.length > 1 && (
                <Header title="Language" onBack={handleBack} />
              )}

              <div className={clsx(styles['menu-body'])}> {renderItems()}</div>
            </Wrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
};

export default Menu;

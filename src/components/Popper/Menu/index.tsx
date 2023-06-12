import clsx from 'clsx';
import Wrapper from '../Wrapper';
import { FC, useState } from 'react';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

import Tippy from '@tippyjs/react';
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

  const backHandle = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div
          className={clsx(styles['menu-item-list'])}
          tabIndex={-1}
          {...attrs}
        >
          <Wrapper className={clsx(styles['menu-wrapper'])}>
            {history.length > 1 && (
              <Header title="Language" onBack={backHandle} />
            )}

            {renderItems()}
          </Wrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;

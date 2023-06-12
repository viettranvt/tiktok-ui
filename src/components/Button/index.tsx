import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, ForwardRefExoticComponent, RefAttributes } from 'react';

interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'default' | 'primary' | 'outline' | 'text' | 'rounded';
  size?: 'small' | 'medium' | 'large';
  children?: JSX.Element | string;
  disabled?: boolean;
  lefIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  className?: string;
}

interface ComponentProps {
  to: string;
  href?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  to = '#',
  href,
  onClick,
  type = 'default',
  size = 'medium',
  disabled,
  children,
  lefIcon,
  rightIcon,
  className,
}) => {
  let Component:
    | keyof JSX.IntrinsicElements
    | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> =
    'button';
  const props: ComponentProps = {
    onClick,
    to,
  };

  if (disabled) {
    props.onClick = undefined;
  }

  if (to && to !== '#') {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = clsx(styles.wrapper, styles[size], styles[type], className, {
    [styles.disabled]: disabled,
  });

  return (
    <Component className={classes} {...props}>
      {lefIcon && <span className={clsx(styles.icon)}>{lefIcon}</span>}
      <span className={clsx(styles['title-button'])}>{children}</span>
      {rightIcon && <span className={clsx(styles.icon)}>{rightIcon}</span>}
    </Component>
  );
};

export default Button;

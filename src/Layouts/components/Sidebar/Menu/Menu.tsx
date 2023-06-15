interface Props {
  children: JSX.Element | JSX.Element[];
}

function Menu({ children }: Props) {
  return <nav>{children}</nav>;
}

export default Menu;

import { LayoutProps } from '~/constant';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

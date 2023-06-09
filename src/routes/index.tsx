import { NoneLayout } from '~/components/Layout';
import HeaderOnly from '~/components/Layout/HeaderOnly';
import { LayoutProps } from '~/constant';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

interface Route {
  path: string;
  component: () => JSX.Element;
  layout?: (Props: LayoutProps) => JSX.Element;
}

const publicRoutes: Route[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
    layout: NoneLayout,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes };

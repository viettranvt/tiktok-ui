import { NoneLayout } from '~/components/Layouts';
import HeaderOnly from '~/components/Layouts/HeaderOnly';
import routes from '~/config/route';
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
    path: routes.home,
    component: Home,
  },
  {
    path: routes.following,
    component: Following,
  },
  {
    path: routes.profile,
    component: Profile,
    layout: NoneLayout,
  },
  {
    path: routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes };

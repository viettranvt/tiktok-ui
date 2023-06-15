import { NoneLayout } from '~/Layouts';
import HeaderOnly from '~/Layouts/HeaderOnly';
import config from '~/config';
import { LayoutProps } from '~/constant';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

interface Route {
  path: string;
  component: () => JSX.Element;
  layout?: (Props: LayoutProps) => JSX.Element;
}

const publicRoutes: Route[] = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: NoneLayout,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes };

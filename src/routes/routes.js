import config from '~/config';

// layout
import HeaderOnly from '~/layouts/headerOnly';

// page
import Home from '~/pages/home';
import CheckPhone from '~/features/authentication/check_phone';

const publicRoutes = [
  { path: config.routers.home, component: Home },
  { path: config.routers.checkPhone, component: CheckPhone, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import config from '~/config';

import Home from '~/pages/home';

const publicRoutes = [{ path: config.routers.home, component: Home }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

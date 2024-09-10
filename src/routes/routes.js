import config from '~/config';

import Home from '~/pages/home';
import Facility from '~/pages/facility';

const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.facility, component: Facility }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

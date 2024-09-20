import React from 'react';
import { Route } from 'react-router-dom';
import config from '~/config';
import PrivateRoute from './privateRoute';

import Home from '~/pages/home';
import Admin from '~/pages/admin';
import Doctor from '~/pages/doctor';
import News from '~/pages/news/news';
import ServiceNews from '~/pages/news/serviceNews';
import MedicalNews from '~/pages/news/medicalNews';
import MedicalKnowledge from '~/pages/news/medicalKnowledge';
import Accounts from '~/pages/accounts/account';

const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.news, component: News },
    { path: config.routers.service, component: ServiceNews },
    { path: config.routers.medical, component: MedicalNews },
    { path: config.routers.medicalKnowledge, component: MedicalKnowledge },
    { path: config.routers.accounts + '/*', component: Accounts }
];

const privateRoutes = [
    { 
        path: '/admin', 
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <Admin />
          </PrivateRoute>
        )
    },
    { 
        path: '/doctor', 
        element: (
          <PrivateRoute allowedRoles={['doctor', 'admin', 'department_head']}>
            <Doctor />
          </PrivateRoute>
        )
    },
    
];

export { publicRoutes, privateRoutes };
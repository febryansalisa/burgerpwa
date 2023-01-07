/* eslint-disable */

import Detail from '../views/pages/detail';
import favRest from '../views/pages/favorite';
import home from '../views/pages/now-home';

const routes = {
  '/': home, // default page
  '/now-home': home,
  '/detail/:id': Detail,
  '/favorite': favRest,
};

export default routes;

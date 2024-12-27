import { paths } from './paths';
import HomePage from '../pages/guest/home/Home';
import GuestLayout from '../layout/guest';

export const guestRoutes = [
  {
    path: paths.home,
    layout: GuestLayout,
    component: HomePage,
    protected: false,
  },
];

const WebRoutes =[
  ...guestRoutes
];

export default WebRoutes
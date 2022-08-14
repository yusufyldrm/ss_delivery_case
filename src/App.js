import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppLayout from 'layouts/AppLayout';
import AuthLayout from 'layouts/AuthLayout';
import {
  RestrictedRoute,
  PrivateRoute
} from 'routes';
import {
  NotFoundPage,
  LoginPage,
  HomePage,
  ProfilePage,
  PastOrders,
  SingleRestaurantPage
} from 'pages';

const withLayout = (LayoutCmp, RenderCmp) => <LayoutCmp><RenderCmp /></LayoutCmp>;

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            key={'auth'}
            path={'/auth'}
            element={
              <RestrictedRoute>
                {withLayout(AuthLayout, LoginPage)}
              </RestrictedRoute>
            }
          />

          <Route
            key={'home'}
            path={'/'}
            element={
              <PrivateRoute>
                {withLayout(AppLayout, HomePage)}
              </PrivateRoute>
            }
          />
          <Route
            key={'profile'}
            path={'/profile'}
            element={
              <PrivateRoute>
                {withLayout(AppLayout, ProfilePage)}
              </PrivateRoute>
            }
          />
          <Route
            key={'past-orders'}
            path={'/past-orders'}
            element={
              <PrivateRoute>
                {withLayout(AppLayout, PastOrders)}
              </PrivateRoute>
            }
          />
          <Route
            key={'restaurant'}
            path={'/restaurant/:restaurantId'}
            element={
              <PrivateRoute>
                {withLayout(AppLayout, SingleRestaurantPage)}
              </PrivateRoute>
            }
          />
          <Route
            key={'restaurant'}
            path={'/restaurant'}
            element={<Navigate to={'/'} />}
          />

          <Route
            key={'not-found'}
            path={'*'}
            element={withLayout(AppLayout, NotFoundPage)}
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
};

export default App;

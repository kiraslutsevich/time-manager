import { Routes, Route } from 'react-router-dom';
import Protector from './Protector';
import Home from '../../pages/HomePage';
import SignInPage from '../../pages/SignInPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Layout from './Layout';

type RouteType = {
  path: string;
  element: React.FC;
  requiredIsAuthState?: boolean;
  redirectTo?: string;
};

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/auth/sign-in',
    element: SignInPage,
    requiredIsAuthState: false,
  },
  {
    path: '*',
    element: NotFoundPage,
  },
];

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.requiredIsAuthState === undefined
              ? (
                <route.element />
              ) : (
                <Protector
                  requiredIsAuthState={route.requiredIsAuthState}
                  redirectTo={route.redirectTo}
                >
                  <route.element />
                </Protector>
              )}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Navigation;
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header />
      <Outlet />
      <footer />
    </>
  );
};

export default Layout;
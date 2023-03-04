import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Outlet />
      <Link />
    </div>
  );
};

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../components/nav_bar/dashboard_navbar";
import GuestNavBar from "../components/nav_bar/guest_navbar";
import CustomNavBar from "./nav/nav";

const Layout = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/user/");

  return (
    <div
      className={`d-flex flex-column align-items-start px-0${
        isDashboardRoute ? "" : "bg-dark"
      }`}
    >
      {/* {isDashboardRoute ? <CustomNavBar /> : <GuestNavBar />} */}
      <Outlet />
    </div>
  );
};

export default Layout;

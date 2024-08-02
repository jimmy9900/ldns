import { Link, Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Sidebar from "./../sidebar/sidebar";
import CustomNavBar from "../nav/nav";
export default function DashboardScreen() {
  return (
    <div>
      <div
        className={`${styles.main} col-12 d-flex align-items-center justify-content-between`}
      >
        <Sidebar />
        <div className="col-12 col-md-10 text-center px-3 fs-1 h-100">
          <CustomNavBar />

          <Outlet />
        </div>
      </div>
    </div>
  );
}

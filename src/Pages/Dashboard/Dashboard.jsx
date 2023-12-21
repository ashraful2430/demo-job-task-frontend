import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  return (
    <>
      <div className="font-merri">
        <DashboardNavbar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import DashboardNavLink from "./DashboardNavlink";
import DashboardSideNav from "./DashboardSideNav";

const DashboardNavbar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <DashboardNavLink />
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <DashboardSideNav />
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;

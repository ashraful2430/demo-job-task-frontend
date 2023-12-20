import NavBarLink from "./NavBarLink";
import SideNav from "./SideNav";

const Navbar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <NavBarLink></NavBarLink>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <SideNav></SideNav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

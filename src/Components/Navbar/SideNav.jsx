import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <ul className="menu p-4 w-60 min-h-full bg-base-200 z-50">
        <div className="flex flex-col gap-3 text-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/tasks"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            My Tasks
          </NavLink>
        </div>
      </ul>
    </>
  );
};

export default SideNav;

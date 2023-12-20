import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " bg-none text-blue-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/tasks"}
          className={({ isActive }) =>
            isActive ? " bg-none text-blue-500 font-bold" : ""
          }
        >
          My Tasks
        </NavLink>
      </ul>
    </>
  );
};

export default SideNav;

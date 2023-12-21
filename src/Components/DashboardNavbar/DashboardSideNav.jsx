import { NavLink } from "react-router-dom";

const DashboardSideNav = () => {
  return (
    <>
      <ul className="menu p-4 w-52 min-h-full bg-base-200 z-50 text-center">
        <div className="flex flex-col gap-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/add-task"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            Add Task
          </NavLink>
          <NavLink
            to={"/to-do"}
            className={({ isActive }) =>
              isActive ? " bg-none text-[#66b888] font-bold" : ""
            }
          >
            To Do
          </NavLink>
        </div>
      </ul>
    </>
  );
};

export default DashboardSideNav;

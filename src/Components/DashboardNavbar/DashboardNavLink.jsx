import { NavLink } from "react-router-dom";
import Container from "../../Shared/Container";

const DashboardNavLink = () => {
  return (
    <>
      <div className="w-full navbar bg-base-200 shadow-xl">
        <Container>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              <div className="flex justify-center items-center gap-4">
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
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DashboardNavLink;

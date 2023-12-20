import { NavLink } from "react-router-dom";
import Container from "../../Shared/Container";

const NavBarLink = () => {
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
          <div className="flex-1 px-2 mx-2">TaskNinja</div>
          <div className="flex-none hidden lg:block mr-28">
            <div className="flex items-center gap-4">
              {/* Navbar menu content here */}
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
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBarLink;

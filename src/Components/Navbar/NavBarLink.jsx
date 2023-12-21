import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../../Shared/Container";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";

const NavBarLink = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const defaultPhoto =
    "https://i.ibb.co/Fhm4brM/Screenshot-2023-11-25-145934.jpg";
  const handleLogOut = () => {
    logout()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
          <div className="flex-1 px-2 mx-2">
            <Link to={"/"}>
              <img className="h-14" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block mr-28">
            <div className="flex items-center gap-4">
              {/* Navbar menu content here */}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? " bg-none text-[#66b888] font-bold" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/tasks"}
                className={({ isActive }) =>
                  isActive ? " bg-none text-[#66b888] font-bold" : ""
                }
              >
                My Tasks
              </NavLink>
              {user?.email ? (
                <div className="dropdown dropdown-end z-50 text-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={user.photoURL ? user?.photoURL : defaultPhoto}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
                  >
                    <li className="mx-auto">
                      <p className="font-medium">{user.displayName}</p>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-sm  btn-ghost transition hover:scale-110 hover:shadow-xl focus:outline-none"
                      >
                        Logout
                      </button>
                    </li>
                    <li className="mx-auto">
                      <Link>Dashboard</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBarLink;

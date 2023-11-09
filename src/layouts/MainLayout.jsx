import { PiOfficeChairFill } from "react-icons/pi";
import SingleLink from "../components/SingleLink.jsx/SingleLink";
import { Link, useLocation } from "react-router-dom";
import ThemeChanger from "../components/shared/ThemeChanger";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import NotFound from "../pages/NotFound/NotFound";

const MainLayout = ({ children }) => {
  const { state } = useLocation();
  const { user, logOut } = useAuth();

  const links = (
    <>
      <SingleLink path={""} linkTitle={"Home"}></SingleLink>
      <SingleLink path={"alljobs"} linkTitle={"All Jobs"}></SingleLink>
      <SingleLink path={"blogs"} linkTitle={"Blogs"}></SingleLink>
      <SingleLink path={"addjob"} linkTitle={"Add Job"}></SingleLink>
      <SingleLink
        path={`myjobs/${user?.email}`}
        linkTitle={"My Jobs"}
      ></SingleLink>
      <SingleLink
        path={`appliedjobs/${user?.email}`}
        linkTitle={"Applied Jobs"}
      ></SingleLink>
    </>
  );
  return state?.from == "404" ? (
    <NotFound />
  ) : (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="drawer font-poppins">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar  dark:bg-[#1C1B1F]">
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
            <Link to="/" className="flex-1 px-2 mx-2 text-xl font-bold">
              <PiOfficeChairFill className="text-3xl mr-2 dark:text-sky-400" />
              Applicruit
            </Link>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>

            <div className="flex items-center justify-center gap-3">
              <ThemeChanger></ThemeChanger>
              {user?.email ? (
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img
                          src={user?.photoURL}
                          alt="Profile Photo"
                          title={user?.displayName}
                        />
                    </div>
                    

                  </div>
                  <button
                    type="submit"
                    className="bg-[#04AA6D] font-medium hover:bg-[#454a9b] text-white text-sm btn btn-sm rounded-md px-2"
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-[#04AA6D] hover:bg-[#454a9b] text-white w-full rounded-md py-2 px-6 drop-shadow-md"
                >
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

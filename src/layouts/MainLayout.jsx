import { PiOfficeChairFill } from "react-icons/pi";
import SingleLink from "../components/SingleLink.jsx/SingleLink";
import { Link } from "react-router-dom";
import ThemeChanger from "../components/shared/ThemeChanger";

const MainLayout = ({ children }) => {
  const links = (
    <>
      <SingleLink path={"alljobs"} linkTitle={"All Jobs"}></SingleLink>
      <SingleLink path={"blogs"} linkTitle={"Blogs"}></SingleLink>
    </>
  );
  return (
    <div className="drawer font-workSans">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
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
          <Link to='/' className="flex-1 px-2 mx-2 text-xl font-bold">
            <PiOfficeChairFill className="text-3xl mr-2 dark:text-sky-400" />
            Applicruit
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {links}
            </ul>
          </div>
          <div><ThemeChanger></ThemeChanger><Link to='/login' className="btn btn-primary btn-md">Login</Link></div>
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
  );
};

export default MainLayout;

import { NavLink } from "react-router-dom";


const SingleLink = ({path, linkTitle}) => {
    return (
        <NavLink to={`/${path}`} activeClassName="active">
        {({isActive})=>(
          <><li  className={isActive ? "active font-bold dark:text-sky-600 underline" : ""}><span className='hover:bg-[#0d0c22] dark:hover:bg-emerald-600 hover:text-white '>{linkTitle}</span></li></>
        )}
      </NavLink>
    );
};

export default SingleLink;
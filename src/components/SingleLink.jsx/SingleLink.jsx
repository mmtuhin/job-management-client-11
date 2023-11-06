import { NavLink } from "react-router-dom";


const SingleLink = ({path, linkTitle}) => {
    return (
        <NavLink to={`/${path}`} className="active">
        {({isActive})=>(
          <><li  className={isActive ? "active font-bold dark:text-sky-600 underline underline-offset-4" : ""}><span className='hover:bg-[#2f363d] dark:hover:bg-emerald-600 hover:text-white '>{linkTitle}</span></li></>
        )}
      </NavLink>
    );
};

export default SingleLink;
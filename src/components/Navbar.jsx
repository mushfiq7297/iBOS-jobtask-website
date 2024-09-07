
import { NavLink } from "react-router-dom";

 

const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//   const handleLogOut = () => {
//     logOut().then().catch();
//   };
    const navLinks = (
    <>
         <li >
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories </NavLink>
      </li>
      <li>
        <NavLink to="/custom">Custom</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      
    </>
    )
  return ( 
      <div className="navbar fixed px-4 z-10 shadow-lg  top-0  text-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box text-black w-60"
            >
              {navLinks}
            </ul>
          </div>
          <span className="text-black bg-blue-500 rounded-full text-2xl px-4 py-2">F</span><a className="btn btn-ghost text-xl font-Inter -mx-3">Furni<span className="text-blue-500 -mx-2">Flex</span></a>
        </div>
        <div className="navbar-center hidden lg:flex lg:gap-4">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {/* {user ? (
          <div>
            <div
              className="tooltip tooltip-left  flex gap-3"
              data-tip={user?.displayName || user.email}
            >
              <div>
              <img
                src={user?.photoURL || "/src/assets/userDefaultPic.png"}
                alt=""
                className="w-8 h-8 mt-2 rounded-full "
              />
              </div>
              <div>
              <button
                onClick={handleLogOut}
                className="btn btn-active btn-primary h-8 mr-2"
              >

                SIGN OUT
              </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary mr-2">LOGIN</button>
          </Link>
        )} */}
        </div>
      </div>
  );
};

export default Navbar;

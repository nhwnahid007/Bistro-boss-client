import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? '900' : 'bold',
    color: isActive ? 'yellow' : '#feb236',
    backgroundColor: isActive ? 'green' : 'transparent',
    borderRadius: isActive ? '5px' : '0',
    padding: '10px',
    textDecoration: 'none',
  });

  const navLinks = (
    <>
       <li>
        <NavLink to="/" style={setActiveStyle} className="font-black">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu" style={setActiveStyle} className="font-black">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order" style={setActiveStyle} className="font-black">Order Food</NavLink>
      </li>
     
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-50 bg-black text-white bg-opacity-30">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

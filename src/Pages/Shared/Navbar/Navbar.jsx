import { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuhtContext } from '../../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

  const {user,logOut} = useContext(AuhtContext)



  const setActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? '900' : 'bold',
    color: isActive ? 'yellow' : '#feb236',
    backgroundColor: isActive ? 'green' : 'transparent',
    borderRadius: isActive ? '5px' : '0',
    padding: '10px',
    textDecoration: 'none',
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      toast.success('Logged Out Successfully')
    })
    .catch(error =>{
      console.log(error)
      toast.error('Logout failed')
    })
    
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" style={setActiveStyle} className="font-black">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu" style={setActiveStyle} className="font-black">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" style={setActiveStyle} className="font-black">Order Food</NavLink>
      </li>
      
      {
        user?  <>
        <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>

        </> : <><li>
        <NavLink to="/login" style={setActiveStyle} className="font-black">Login</NavLink>
      </li></>
      }
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-50 bg-black text-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown" ref={dropdownRef}>
            <button 
              className="btn btn-ghost lg:hidden" 
              onClick={toggleMenu}
            >
              {menuOpen ? <AiOutlineClose className="h-5 w-5" /> : <AiOutlineMenu className="h-5 w-5" />}
            </button>
            {menuOpen && (
              <ul
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            )}
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

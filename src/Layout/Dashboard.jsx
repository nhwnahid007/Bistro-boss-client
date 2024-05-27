import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { MdRestaurantMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/UseCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
      {/* Dashboard Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            
            <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar> Reservation</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My cart ({cart.length}) </NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/review"> <MdReviews /> Add a Review</NavLink>
          </li>
          <li>
            
            <NavLink to="/dashboard/bookings"> <FaList></FaList> Bookings</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            
            <NavLink to="/"> <FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            
            <NavLink to="/"><MdRestaurantMenu />  Menu</NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    de</div>
  );
};

export default Dashboard;

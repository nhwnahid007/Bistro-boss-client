import { FaBook, FaCalendar, FaEnvelope, FaHome, FaShoppingCart,  FaUsers,  FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import {  MdRestaurantMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/UseCart";

const Dashboard = () => {
  const [cart] = useCart();

  //todo: get is admin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      {/* Dashboard Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              {" "}
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              {" "}
              <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              {" "}
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageBookings">
              {" "}
              <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              {" "}
              <FaUsers></FaUsers> All Users
            </NavLink>
          </li>
            </> 
            : 
            <>
            <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart></FaShoppingCart> My cart ({cart.length}){" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <MdReviews /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList></FaList> Bookings
            </NavLink>
          </li>
            </>
            
          }

          {/* Divider */}
          <div className="divider"></div>
          {/* Shared navlinks */}
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdRestaurantMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              {" "}
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

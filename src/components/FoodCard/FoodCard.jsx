import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";


const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id} =item;
    const {user}= UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure= useAxiosSecure()
  
    const handleAddToCart = food => {
      
     if(user && user.email){
      //todo: send cart item to the database
      console.log(user.email,food)
      const cartItem = {
        menuId : _id,
        email : user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        toast.success(`${name} added to your cart successfully`)
      }
      })
     }
     else{
      Swal.fire({
        title: "Please Login to add to the cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          //sent the user to the login page
          navigate('/login',{state:{from: location}})
        }
      });
     }
    }



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 rounded-md px-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>
            {recipe}
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className=" btn  btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4 ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

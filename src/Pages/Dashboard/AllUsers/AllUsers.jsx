import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  //just admin will have authorization to load the data j
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const handleMakeAdmin = (user) =>{
    
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount>0){
        refetch()
        toast.success(`${user.name} is an admin now`)
      }
    })
  }


  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl">All Users</h1>
        <h1 className="text-3xl">Total Users: {users.length} </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'Admin' :
                    
                    <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-500 "
                  >
                    <FaUsers className="text-white  text-2xl"></FaUsers>
                  </button>}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

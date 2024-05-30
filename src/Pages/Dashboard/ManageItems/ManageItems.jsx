import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu] = UseMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${id}`);

          // Check if the delete operation was successful
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Item could not be deleted.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the item.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"
      ></SectionTitle>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>

                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`} >
                      <button className="btn btn-sm btn-ghost bg-orange-500 ">
                        <FaEdit className="text-white  "></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;

import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
    const {name, category, recipe, price, _id} = useLoaderData()
    
    const { register, handleSubmit } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = useAxiosSecure();
 const navigate = useNavigate()
    const onSubmit =async (data) => {
        console.log(data);
        //image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                "content-type": "multipart/form-data",
    
            }
        })
        if(res.data.success){
            // now send the menu item data to the user with image
            const menuItem ={
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
        console.log(menuItem)
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
       if(menuRes.data.modifiedCount>0){
        //show success pop up
       
        toast.success(`${data.name} updated successfully`)
        navigate('/dashboard/manageItems')
       }
        console.log(menuRes.data)
    
        }
        console.log('with image url',res.data)
      };

    return (
        <div>
            <SectionTitle heading='Update Item' subHeading='Refresh Info'></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name", { required: true })}
            defaultValue={name}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </label>

        <div className="flex gap-6">
          {/* Category */}

          <div className="w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* Price */}

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
            defaultValue={price}
              {...register("price", { required: true })}
              type="number"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Text area */}
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe details</span>
          </div>
          <textarea
          defaultValue={recipe}
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe"
          ></textarea>
        </label>
        {/* File Input */}
        <input
          {...register("image")}
          type="file"
          className="file-input w-full my-4"
        />
        <button className="btn my-4">
          Update Item <FaUtensils className="ml-2"></FaUtensils>
        </button>
      </form>
        </div>
    );
};

export default UpdateItems;
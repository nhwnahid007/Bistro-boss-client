import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = UseAxiosPublic()
  const onSubmit =async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            "content-type": "multipart/form-data",

        }
    })
    console.log(res.data)
  };
  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's new?"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full my-6">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name", { required: true })}
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
              defaultValue="default"
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
          Add Item <FaUtensils className="ml-2"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;

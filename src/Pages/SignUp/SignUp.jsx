import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuhtContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,  // Import reset function
    formState: { errors },
  } = useForm();

  const {createUser,updateUserProfile} = useContext(AuhtContext)

  //axios 

  const axiosPublic = UseAxiosPublic()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    // After handling the form submission, reset the form
   
    createUser(data.email,data.password)
    .then(result =>{
      const LoggedUser = result.user
      console.log(LoggedUser)
      updateUserProfile(data.name,data.photoURL)
      .then(()=>{
        const userInfo = {
          name: data.name,
          email: data.email
        }
        console.log('User Profile Updated')
        axiosPublic.post('/users',userInfo)
        .then(res => {
          if(res.data.insertedId){
            console.log('user added to the database')
            reset();
            toast.success("sign up successfully")
            navigate('/')
          }
        })

        
      })
      .catch(error =>{
        console.log(error)
      })
     
    })
    .catch(error=>{
      console.log(error)
      toast.error("Error happened")
    })
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("photoURL", { required: "photoURL is required" })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-500">{errors.photoURL.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password limit is 20 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must have one lowercase, one uppercase, one special character, and one number",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="text-xl" />
                  ) : (
                    <AiFillEye className="text-xl" />
                  )}
                </div>
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be at least 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Password limit is 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <>
                  {!/(?=.*[a-z])/.test(errors.password.ref.value) && (
                    <span className="text-red-500">Must include one lowercase letter</span>
                  )}
                  {!/(?=.*[A-Z])/.test(errors.password.ref.value) && (
                    <span className="text-red-500">Must include one uppercase letter</span>
                  )}
                  {!/(?=.*[0-9])/.test(errors.password.ref.value) && (
                    <span className="text-red-500">Must include one number</span>
                  )}
                  {!/(?=.*[!@#$&*])/.test(errors.password.ref.value) && (
                    <span className="text-red-500">Must include one special character</span>
                  )}
                </>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className="mx-8 "><small>Already Have an account? <Link className="font-bold text-primary" to='/login'>Sign in</Link> here</small> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

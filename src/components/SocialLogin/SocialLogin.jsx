import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = UseAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post('/users',userInfo)
        .then(res=>{
            console.log(res.data)
            toast.success("Signed in successfully");
            navigate(from, { replace: true });
        })
       
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Google Sign in failed ${error}`);
      });
  };
  return (
    <div>
      <div className="mx-8">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full flex items-center"
        >
          <FaGoogle></FaGoogle>
          Sign in witn Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", 
});

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} =UseAuth()
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptors',token)
    config.headers.authorization = `Bearer ${token}`
    return config
  },function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  } )

  //intercepts 401 and 403 status 

  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async (error)=>{
    const status = error.response.status
    // console.log('Status error in the interceptor',status)

    // for 401 and 403 logout the user and navigate the user to the login page
    if(status ===401 || status ===403){
      //todo
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxiosSecure;

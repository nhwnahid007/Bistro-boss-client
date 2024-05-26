import { useContext } from "react";
import { AuhtContext } from "../Providers/AuthProvider";

const UseAuth = () => {
  const auth = useContext(AuhtContext);
  return auth;
};

export default UseAuth;

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute3 = ({ children }) => {
  
       const {user, loading} = useContext(AuthContext)

  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg ml-96 my-60"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute3;
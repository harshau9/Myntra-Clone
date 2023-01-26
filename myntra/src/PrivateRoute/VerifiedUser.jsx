import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const VerifiedUser = ({ children }) => {
  const { isAuth } = useSelector((store) => store.dataReducer);
 

  if (isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default VerifiedUser;

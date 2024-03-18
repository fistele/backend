import NavScroll from "./NavScrolls";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  let token = localStorage.getItem("CC_Token");
  // console.log("token est " + token)
  return token != null ? (
    <>
      <NavScroll />
      <Outlet />s
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoutes;

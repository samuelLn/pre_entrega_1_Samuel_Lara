import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let user = { rol: "adminx" };

  return <>{user.rol === "admin" ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;

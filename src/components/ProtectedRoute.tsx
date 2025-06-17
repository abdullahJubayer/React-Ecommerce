import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store/ReduxStore";

export const ProtectedRoute = () => {
  const userId = useAppSelector((store) => store.user.userId);
  return userId ? <Outlet /> : <Navigate to="/" replace />;
};

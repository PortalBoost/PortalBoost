import { useRecoilValue } from "recoil";
import successfullLogin from "../atoms/successfulLogin";
import { Route, RouteProps, redirect, Navigate, Outlet } from "react-router-dom";

// interface AuthRouteProps {
// 	element: React.ReactNode;
// 	path: string;
// }

const AuthRoute = () => {

	const isAuth = useRecoilValue(successfullLogin)

	return isAuth ? <Outlet /> : <Navigate to="/login" replace />

}

export default AuthRoute;
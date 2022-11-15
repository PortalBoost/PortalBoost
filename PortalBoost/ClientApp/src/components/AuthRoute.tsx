import { useRecoilValue } from "recoil";
import successfullLogin from "../atoms/successfulLoginState";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
	const isAuth = useRecoilValue(successfullLogin)

	return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}

export default AuthRoute;
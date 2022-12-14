import { useRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import userState from "../atoms/userState";
import successfullLoginState from "../atoms/successfulLoginState";
import { loginUser } from "../services/API/userService";
import UserModel from "../models/userModel";



const useAuth = () => {
	const [currentUser, setCurrentUser] = useRecoilState(userState)
	const [userAuth, setUserAuth] = useRecoilState(successfullLoginState)
	const resetUser = useResetRecoilState(userState);
	const navigate = useNavigate();

	const logout = () => {
		resetUser();
		setUserAuth(false);
	}

	const setValidLogin = (user: UserModel) => {
		setCurrentUser(user);
		setUserAuth(true)
		navigate("/")
	}

	const updateLoggedInUser = (user: UserModel) => {
		setCurrentUser(user)
	}

	return {
		logout,
		setValidLogin,
		updateLoggedInUser
	}
};

export default useAuth;
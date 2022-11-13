import { useRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import userState from "../atoms/userState";
import successfullLogin from "../atoms/successfulLogin";
import { loginUser } from "../services/API/userService";
import UserModel from "../models/userModel";



const useAuth = () => {
	const [currentUser, setCurrentUser] = useRecoilState(userState)
	const [userAuth, setUserAuth] = useRecoilState(successfullLogin)
	const resetUser = useResetRecoilState(userState);
	const navigate = useNavigate();

	const logout = () => {
		resetUser();
		setUserAuth(false);
	}

	const login = (user: UserModel) => {
		setCurrentUser(user);
		setUserAuth(true)
		navigate("/")
	}

	return {
		logout,
		login
	}
};

export default useAuth;
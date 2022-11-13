import { useRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import userState from "../atoms/userState";
import successfullLogin from "../atoms/successfulLogin";
import { loginUser } from "../services/API/userService";



const useAuth = () => {
	const [currentUser, setCurrentUser] = useRecoilState(userState)
	const [userAuth, setUserAuth] = useRecoilState(successfullLogin)

	const logout = () => {
		const resetUser = useResetRecoilState(userState);
		resetUser();
		setUserAuth(false);

	}

	const login = () => {

	}

	return {
		logout
	}
};

export default useAuth;
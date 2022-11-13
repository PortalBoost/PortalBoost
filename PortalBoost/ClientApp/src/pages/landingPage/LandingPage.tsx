import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import successfullLogin from "../../atoms/successfulLogin"
import userState from "../../atoms/userState"
import UserModel from "../../models/userModel"
import useAuth from "../../hooks/useAuth"



const LandingPage = () => {
	const auth = useAuth();
	//Test stuff
	const [loggedinUser, setLoggedinUser] = useRecoilState(userState)
	const [validLogin, setValidLogin] = useRecoilState(successfullLogin)

	const testHandleLogout = () => {
		auth.logout();
	}



	return (
		<div className="">
			<p className="">This is a LandingPage</p>
			<p>You appear to be logged in as: </p>
			<p className="font-bold">Username: {loggedinUser.username}<br /> Email: {loggedinUser.email} </p>
			<button onClick={testHandleLogout}>Test-logout</button>
		</div>
	)
}

export default LandingPage
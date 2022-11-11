import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import successfullLogin from "../../atoms/successfulLogin"
import userState from "../../atoms/userState"
import UserModel from "../../models/userModel"



const LandingPage = () => {

	//Test stuff
	const [loggedinUser, setLoggedinUser] = useRecoilState(userState)
	const [validLogin, setValidLogin] = useRecoilState(successfullLogin)

	const testHandleLogout = () => {
		// Test stuff, resets testUser object. There's probably a better way of doing this
		const emptyUser: UserModel = {
			id: "",
			username: "",
			email: "",
			password: "",
		}
		setLoggedinUser(emptyUser);
		setValidLogin(false);
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
import { useRecoilState, useRecoilValue } from "recoil"
import { Navigate } from "react-router-dom"
import successfullLogin from "../../atoms/successfulLogin"
import userState from "../../atoms/userState"
import { TestUser } from "../../models/TestUser"



const LandingPage = () => {

	//Test stuff
	const [loggedinUser, setLoggedinUser] = useRecoilState(userState)
	const [validLogin, setValidLogin] = useRecoilState(successfullLogin)

	// TODO: Redirect to "/" as a logged out user
	const testHandleLogout = () => {
		// Test stuff, resets testUser object. There's probably a better way of doing this
		const emtpyUser: TestUser = {
			username: "",
			email: "",
			password: "",
		}
		setLoggedinUser(emtpyUser)
		setValidLogin(false)

	}

	return (
		<div>
			<p className="">This is a LandingPage</p>
			<p>You appear to be logged in as: </p>
			<p className="font-bold">Username: {loggedinUser.username}<br /> Email: {loggedinUser.email} </p>
			<button>Test-logout</button>
		</div>
	)
}

export default LandingPage
import { useState } from "react"
import { useRecoilState } from "recoil";
import successfullLogin from "../../atoms/successfulLogin";
import userState from "../../atoms/userState";
import UserModel from "../../models/userModel";
import { loginUser } from "../../services/API/userService";




const LoginForm = () => {
	const [emailField, setEmailField] = useState("");
	const [usernameField, setUsernameField] = useState("");
	const [passField, setPassField] = useState("");
	const [loggedInUser, setLoggedInUser] = useRecoilState(userState)
	const [loggedInSuccess, setLoggedInSuccess] = useRecoilState(successfullLogin)

	const [showEmailHelpText, setShowEmailHelpText] = useState(false)
	const [emailHelpText, setEmailHelpText] = useState("email-help-text");
	const [showPassHelpText, setShowPassHelpText] = useState(false)
	const [passWordHelpText, setpassWordHelpText] = useState("password-help-text");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// loggedInUser used to mock API response with a real user-object

		// const loggedInUser: UserModel = {
		// 	id: "123",
		// 	username: "TestUser",
		// 	email: emailField,
		// 	password: passField
		// }
		// setLoggedInUser(loggedInUser)
		// setLoggedInSuccess(true)

		// TEST_LOGIN
		const testLogin = await loginUser(emailField, passField)
		if (testLogin) console.log("Succesfull login")
		console.log(testLogin)


	}

	const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassField(e.target.value)
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailField(e.target.value)
	}

	// TODO: Proper responsiveness
	// TODO: Style the default input-validation messages.
	return (

		<div className="flex flex-col justify-center items-center  border-2 rounded-md p-5 py-10 xs:p-20  bg-white">
			<h2 className="font-lighter pb-10">PortalBoost Login</h2>

			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="pb-0" >
					<label id="email" className="font-sans sr-only">E-mail</label>
					<input id="email" name="email" type="text" autoComplete="password" placeholder="E-mail" onChange={handleEmailChange} required
						className="relative block rounded-sm px-2 py-1 text-sm font-arial text-n-dark placeholder-n-dark ring-1 ring-n-dark focus:outline-none focus:ring-2">
					</input>
					<span className={`text-xs ${showEmailHelpText ? "visible" : "invisible"}`}>{emailHelpText}</span>
				</div>

				<div className="">
					<label id="password" className="font-sans sr-only">Password</label>
					<input id="password" name="password" type="password" autoComplete="password" placeholder="Password" onChange={handlePassChange} required
						className="relative block rounded-sm px-2 py-1 text-sm font-arial text-n-dark placeholder-n-dark ring-1 ring-n-dark focus:outline-none focus:ring-2">
					</input>
					<span className={`text-xs ${showPassHelpText ? "visible" : "invisible"}`}>{passWordHelpText}</span>
				</div>

				<button className="bg-n-turquoise text-white p-1 rounded-md w-full hover:shadow-lg hover:bg-n-turquoise-dark transition-shadow active:bg-n-turquoise-light">Login</button>
			</form>

		</div>

	)
}

export default LoginForm
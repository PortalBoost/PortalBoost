import { useState } from "react"

const LoginForm = () => {


	const [showEmailHelpText, setShowEmailHelpText] = useState(false)
	const [emailHelpText, setEmailHelpText] = useState("email-help-text");
	const [showPassHelpText, setShowPassHelpText] = useState(false)
	const [passWordHelpText, setpassWordHelpText] = useState("password-help-text");

	// TODO: Proper responsiveness
	return (

		<div className="flex flex-col justify-center items-center  border-2 rounded-md p-5 py-10 xs:p-20  bg-white">
			<h2 className="font-lighter pb-10">PortalBoost Login</h2>

			<form >
				<div className="pb-0" >
					<label id="email" className="font-sans sr-only">E-mail</label>
					<input id="email" name="email" type="email" autoComplete="password" placeholder="E-mail"
						className="relative block rounded-sm px-2 py-1 text-sm font-arial text-n-dark placeholder-n-dark ring-1 ring-n-dark focus:outline-none focus:ring-2">
					</input>
					<span className={`text-xs ${showEmailHelpText ? "visible" : "invisible"}`}>{emailHelpText}</span>
				</div>

				<div className="">
					<label id="password" className="font-sans sr-only">Password</label>
					<input id="password" name="password" type="password" autoComplete="password" placeholder="Password"
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
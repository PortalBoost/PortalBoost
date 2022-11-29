import { useState } from "react"
import { useRecoilState } from "recoil";
import successfullLogin from "../../atoms/successfulLoginState";
import userState from "../../atoms/userState";
import UserModel from "../../models/userModel";
import { loginUser } from "../../services/API/userService";
import useAuth from "../../hooks/useAuth";
import { AiOutlineLogin } from "react-icons/ai";




// TODO: Proper responsiveness
// TODO: Style the default input-validation messages.
const LoginForm = () => {
	const { setValidLogin } = useAuth();

	const [usernameField, setUsernameField] = useState("");
	const [passField, setPassField] = useState("");

	const [infoText, setInfoText] = useState("infoTextPlaceholder")
	const [showInfoText, setShowInfoText] = useState(false)

	const [disableLogin, setDisableLogin] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setDisableLogin(true)
		const loginRequest = await loginUser(usernameField, passField)
		if (loginRequest == 404) {
			setInfoText("User could not be found")
			setShowInfoText(true)
		}
		else {
			setValidLogin(loginRequest)
		}
		setDisableLogin(false)
	}

	const handlePassFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassField(e.target.value)
	}

	const handleUserFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsernameField(e.target.value)
	}


	return (

		<div className="flex flex-col justify-center items-center border shadow-lg rounded-md p-5 py-10 xs:p-20 gap-2 bg-white">
			<p className="text-6xl text-n-purple-dark filter drop-shadow-md"><AiOutlineLogin /></p>
			<h2 className="font-lighter pb-2">PortalBoost Login</h2>
			<form onSubmit={(e) => handleSubmit(e)} onFocus={() => setShowInfoText(false)} className="flex flex-col gap-5">
				<div className="pb-0" >
					<label id="username" className="font-sans sr-only">Username</label>
					<input id="username" name="username" type="text" autoComplete="password" placeholder="Username" onChange={handleUserFieldChange}
						required maxLength={20} minLength={4}
						className="relative block rounded-sm px-2 py-1 text-sm font-arial text-n-dark placeholder-n-dark/60 ring-1 ring-n-dark outline-n-purple-light">
					</input>

				</div>

				<div className="">
					<label id="password" className="font-sans sr-only">Password</label>
					<input id="password" name="password" type="password" autoComplete="password" placeholder="Password" onChange={handlePassFieldChange} required maxLength={20} minLength={4}
						className="relative block rounded-sm px-2 py-1 text-sm font-arial text-n-dark placeholder-n-dark/60 ring-1 ring-n-dark outline-n-purple-light">
					</input>

				</div>

				<button disabled={disableLogin} className=" bg-n-turquoise text-white p-1 rounded-md w-full hover:shadow-lg hover:bg-n-turquoise-dark transition-shadow active:bg-n-turquoise-light">Login</button>

			</form>
			<p className={`${showInfoText ? "visible" : "invisible"} mt-4 text-red-400 font-sans`}> {infoText} </p>
		</div>

	)
}

export default LoginForm
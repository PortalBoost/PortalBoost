import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import successfullLogin from "../../atoms/successfulLoginState"
import userState from "../../atoms/userState"
import UserModel from "../../models/userModel"
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom";



const LandingPage = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	//Test stuff
	const [loggedinUser, setLoggedinUser] = useRecoilState(userState)
	const [validLogin, setValidLogin] = useRecoilState(successfullLogin)

	const testHandleLogout = () => {
		auth.logout();
	}

	// https://via.placeholder.com/{dimensions}/{color}/{background}/?Text={text}

	return (
		<div className="md:px-16 flex flex-col animate-fade-in">
			<div className="flex flex-col items-center mt-10 gap-4  text-white">
				<h1 className="font-bold text-5xl font-serif text-n-purple text-center"> Hej och Välkommen!</h1>
				<div className="bg-n-dark p-16 xs:rounded-full">
					<p className="text-3xl"> Du är just nu inloggad som: </p>
					<p className="font-bold text-4xl">{loggedinUser.firstName} {loggedinUser.lastName}</p>
					<p className="font-bold text-1xl">Username: {loggedinUser.username}<br /> Email: {loggedinUser.email} </p>
					<div className="flex flex-col sm:flex-row gap-2 mt-2 w-3/4">
						<button className="" onClick={testHandleLogout}>Logga ut</button>
						<button className="" onClick={() => navigate("/profile")}>Gå till profil</button>
					</div>
				</div>

			</div>

			<div className="mt-20 flex flex-col md:flex-row ">
				<img src="https://via.placeholder.com/300x300/" alt="placeholder" className="sm:p-10 md:max-w-[300px] xs:mx-auto" />
				<div className="px-2 sm:ml-8">
					<h1 className="text-n-purple">Title</h1>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam nunc, maximus sit amet tellus eu, imperdiet rhoncus elit. Donec eu efficitur purus. Praesent imperdiet fringilla libero quis hendrerit. Quisque vitae interdum lorem. Praesent quis magna id quam sagittis efficitur nec vel quam. Proin interdum non ex vitae rhoncus. Praesent euismod lectus a maximus tempus. Curabitur sapien dolor, dapibus quis eros non, fermentum bibendum dolor.

						Nunc vitae mattis velit. Sed ultricies lectus at risus auctor, eget suscipit nisi luctus. Quisque consectetur purus facilisis, vestibulum odio eget, porttitor dui. Praesent ac scelerisque est, ut consectetur eros. Nunc malesuada tincidunt tristique. Vestibulum ante ipsum primis in </p>
				</div>
			</div>
			<div className="mt-20 flex flex-col md:flex-row">

				<div className="px-2 sm:ml-8">
					<h1 className="text-n-purple">Title</h1>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam nunc, maximus sit amet tellus eu, imperdiet rhoncus elit. Donec eu efficitur purus. Praesent imperdiet fringilla libero quis hendrerit. Quisque vitae interdum lorem. Praesent quis magna id quam sagittis efficitur nec vel quam. Proin interdum non ex vitae rhoncus. Praesent euismod lectus a maximus tempus. Curabitur sapien dolor, dapibus quis eros non, fermentum bibendum dolor.

						Nunc vitae mattis velit. Sed ultricies lectus at risus auctor, eget suscipit nisi luctus. Quisque consectetur purus facilisis, vestibulum odio eget, porttitor dui. Praesent ac scelerisque est, ut consectetur eros. Nunc malesuada tincidunt tristique. Vestibulum ante ipsum primis in </p>
				</div>
				<img src="https://via.placeholder.com/300x300/" alt="placeholder" className="sm:p-10 md:max-w-[300px] xs:mx-auto" />
			</div>
		</div>
	)
}

export default LandingPage
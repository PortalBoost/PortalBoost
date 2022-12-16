import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import successfullLogin from "../../atoms/successfulLoginState"
import userState from "../../atoms/userState"
import UserModel from "../../models/userModel"
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom";



const LandingPage = () => {
	const auth = useAuth();
	//Test stuff
	const [loggedinUser, setLoggedinUser] = useRecoilState(userState)
	const [validLogin, setValidLogin] = useRecoilState(successfullLogin)

	const testHandleLogout = () => {
		auth.logout();
	}

	// https://via.placeholder.com/{dimensions}/{color}/{background}/?Text={text}

	return (
		<div>
			<div className="flex flex-col items-center mt-10 gap-4 animate-fade-in text-white">
				<h1 className="font-bold text-5xl font-serif text-n-purple"> Hej och Väkommen!</h1>
				<div className="bg-n-dark p-16 rounded-full">
					<p className="text-3xl"> Du är just nu inloggad som: </p>
					<p className="font-bold text-4xl">{loggedinUser.firstName} {loggedinUser.lastName}</p>
					<p className="font-bold text-1xl">Username: {loggedinUser.username}<br /> Email: {loggedinUser.email} </p>
					<button className="mt-5" onClick={testHandleLogout}>Logga ut</button>
					<Link to="/profile">
						<button className="mt-5 ml-5">Gå till profil</button>
					</Link>
				</div>

			</div>
			
			<div className="mt-20 md:flex">
				<img src="https://via.placeholder.com/300x300/" alt="placeholder" className="" />
				<div className="ml-8">
					<h1 className="text-n-purple">Title</h1>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam nunc, maximus sit amet tellus eu, imperdiet rhoncus elit. Donec eu efficitur purus. Praesent imperdiet fringilla libero quis hendrerit. Quisque vitae interdum lorem. Praesent quis magna id quam sagittis efficitur nec vel quam. Proin interdum non ex vitae rhoncus. Praesent euismod lectus a maximus tempus. Curabitur sapien dolor, dapibus quis eros non, fermentum bibendum dolor.

Nunc vitae mattis velit. Sed ultricies lectus at risus auctor, eget suscipit nisi luctus. Quisque consectetur purus facilisis, vestibulum odio eget, porttitor dui. Praesent ac scelerisque est, ut consectetur eros. Nunc malesuada tincidunt tristique. Vestibulum ante ipsum primis in </p>
				</div>
			</div>
			<div className="mt-20 md:flex">
				
				<div className="">
					<h1 className="text-n-purple">Title</h1>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quam nunc, maximus sit amet tellus eu, imperdiet rhoncus elit. Donec eu efficitur purus. Praesent imperdiet fringilla libero quis hendrerit. Quisque vitae interdum lorem. Praesent quis magna id quam sagittis efficitur nec vel quam. Proin interdum non ex vitae rhoncus. Praesent euismod lectus a maximus tempus. Curabitur sapien dolor, dapibus quis eros non, fermentum bibendum dolor.

Nunc vitae mattis velit. Sed ultricies lectus at risus auctor, eget suscipit nisi luctus. Quisque consectetur purus facilisis, vestibulum odio eget, porttitor dui. Praesent ac scelerisque est, ut consectetur eros. Nunc malesuada tincidunt tristique. Vestibulum ante ipsum primis in </p>
				</div>
				<img src="https://via.placeholder.com/300x300/" alt="placeholder" className="ml-20" />
			</div>
		</div>
	)
}

export default LandingPage
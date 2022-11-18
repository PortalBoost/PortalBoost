import {BsPerson} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Header = () => {

	const logoStyling = "text-4xl hover:text-n-purple-light ease-in-out duration-300"
	const profileIcon = "rounded-xl p-2 flex flex-shrink-0 hover:text-n-purple-light ease-in-out duration-300"


	return (
		<header>
			<div className="bg-n-dark text-white px-2 py-2 sm:px-6 lg:px-8 top-0 relative mb-2 z-10">
				<div className="flex items-center justify-between h-16">

					<div className={logoStyling}>
						<Link to="/">
							PortalBoost
						</Link>
					</div>
					<div>
						<p className={profileIcon}>
							<Link to="./profile">
							<p><BsPerson /></p>
							<p>profil</p> 
							</Link></p>	
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

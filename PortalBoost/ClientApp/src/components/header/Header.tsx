import {BsPerson} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Header = () => {

	//importera theme färger från tailwind config.

	return (
		<header>
			<div className="bg-n-dark text-white px-2 py-2 sm:px-6 lg:px-8 top-0 relative mb-2 z-10">
				<div className="flex items-center justify-between h-16">

					<div className="text-4xl hover:text-purple-800">
						<Link to="/">
							PortalBoost
						</Link>
					</div>
					<div className=" border-black rounded-xl p-2 flex flex-shrink-0" >
						<p className="hover-text">
							<Link to="./profile">
							<BsPerson />
							<p className="justify-items-center">profile</p> 
							</Link></p>	
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC<{}> = () => {

	//TODO: use atom instead of state
	const [isOpen, setIsOpen] = useState(true)

	const navBarItem = "hover:text-n-turquoise-dark ease-in-out duration-300 hover:cursor-pointer flex justify-start gap-4 items-center"


	return (
		<div className="fixed top-0 left-0
		bg-white dark:bg-n-gray shadow-lg">

			<div className="mt-20 pt-6 m-2 text-black p-3 h-screen flex items-start">
				<ul className="flex flex-col justify-evenly gap-4">

					<Link to="/">
						<li className={navBarItem}>
							<p><AiOutlineHome /></p>
							<p>home</p>
						</li>
					</Link>

					<Link to="/employees">
						<li className={navBarItem}>
							<p><AiOutlineTeam /></p>
							<p>medarbetare</p>
						</li>
					</Link>

					<Link to="/companies">
						<li className={navBarItem}>
							<p><RiSuitcaseLine /></p>
							<p>kunder</p>
						</li>
					</Link>
				</ul>

				{/* TODO: add functionality to log out*/}
				{/* log out button */}
				<div className="fixed bottom-2 hover:text-n-turquoise-dark ease-in-out duration-300 hover:cursor-pointer flex justify-start gap-4 items-center">
					<p><IoLogOutOutline /></p>
					<p>Log out</p>
				</div>
			</div>
		</div>
	)
}

export default Navbar
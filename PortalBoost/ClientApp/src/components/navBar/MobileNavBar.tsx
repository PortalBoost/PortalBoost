import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const MobileNavBar: React.FC<{}> = () => {
	const auth = useAuth();
	const navBarItem = "hover:text-n-turquoise-dark grid justify-items-center cursor-pointer"
	const biggerIcons = "font-bold text-2xl"

	return (
		<div className="fixed z-50 bottom-0 flex 
		bg-n-blue shadow-xl">
			<div className=" text-black">

				<ul className=" flex justify-around p-2 w-screen">

					<Link to="/">
						<li className={navBarItem}>
							<p><AiOutlineHome className={biggerIcons} /></p>
							<p>home</p>
						</li>
					</Link>

					<Link to="/employees">
						<li className={navBarItem}>
							<p><AiOutlineTeam className={biggerIcons} /></p>
							<p>employees</p>
						</li>
					</Link>

					<Link to="/companies">
						<li className={navBarItem}>
							<p><RiSuitcaseLine className={biggerIcons} /></p>
							<p>clients</p>
						</li>
					</Link>

					<div onClick={auth.logout} className={navBarItem}>
						<p ><IoLogOutOutline className={biggerIcons} /></p>
						<p>log out</p>
					</div>

				</ul>
			</div>
		</div>
	)
}

export default MobileNavBar
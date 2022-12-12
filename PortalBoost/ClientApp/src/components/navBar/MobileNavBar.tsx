import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const MobileNavBar: React.FC<{}> = () => {
	const auth = useAuth();
	const navBarItem = "hover:text-n-turquoise-dark grid justify-items-center"
	const biggerIcons = "font-bold text-2xl"

	return (
		<div className="fixed z-50 bottom-0 flex 
		 bg-n-gray shadow-xl">
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
							<p>collagues</p>
						</li>
					</Link>

					<Link to="/companies">
						<li className={navBarItem}>
							<p><RiSuitcaseLine className={biggerIcons} /></p>
							<p>clients</p>
						</li>
					</Link>

					<div onClick={auth.logout} className={navBarItem + ""}>
						<p className='md:pr-4'><IoLogOutOutline className={biggerIcons} /></p>
						<p>Log out</p>
					</div>

				</ul>
			</div>
		</div>
	)
}

export default MobileNavBar
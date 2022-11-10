import { RiSuitcaseLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MobileNavBar: React.FC<{}> = () => {

	const navBarItem = "hover:text-n-turquoise-dark grid justify-items-center"

	return (
		<div className="fixed bottom-0 flex 
		 dark:bg-n-gray shadow-xl">
			<div className=" text-black">

				<ul className=" flex justify-around p-2 w-screen ">

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
			</div>
		</div>
	)
}

export default MobileNavBar
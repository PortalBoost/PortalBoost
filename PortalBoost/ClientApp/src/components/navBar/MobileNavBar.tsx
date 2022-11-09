import {RiSuitcaseLine} from 'react-icons/ri'
import {AiOutlineTeam} from 'react-icons/ai'

const MobileNavBar: React.FC<{}> = () => {

	return (
		<div className="fixed bottom-0 flex 
		 dark:bg-n-gray shadow-xl">
			<div className=" text-black border-pink-700">
				
				<ul className=" flex justify-around p-2 w-screen ">
					
					{/* länk till personsida */}
					<li className="hover:text-n-turquoise-dark  border-pink-600 grid justify-items-center">
						<p><AiOutlineTeam /></p>
						<p>medarbetare</p>
					</li>

					{/* länk till companysida */}
					<li className="hover:text-n-turquoise-dark grid justify-items-center">
						<p><RiSuitcaseLine /></p>
						<p>kunder</p>
					</li>
				
				</ul>
			</div>
		</div>
	)
}

export default MobileNavBar
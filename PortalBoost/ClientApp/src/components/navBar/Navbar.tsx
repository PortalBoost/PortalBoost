import {BsPerson} from 'react-icons/bs'
import { useState} from 'react'

const Navbar: React.FC<{}> = () => {

const [isOpen, setIsOpen] = useState(true)


	return (
		<div className="fixed top-0 left-0 h-screen w-30s flex flex-col
		bg-white dark:bg-gray-900 shadow-lg">
		  
		<div>
		<ul>
			{/* länk till personsida */}
			<li>
				medarbetare
			</li>
			{/* länk till companysida */}
			<li>
				kunder
			</li>
			</ul>	
		</div>
</div>
	)
}

export default Navbar
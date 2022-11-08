import {BsPerson} from 'react-icons/bs'
import { useState} from 'react'

const Navbar: React.FC<{}> = () => {

const [isOpen, setIsOpen] = useState(true)


	return (
		<div className="fixed top-0 left-0 h-screen w-30s flex flex-col
		bg-white dark:bg-n-gray shadow-lg">
		  
		<div className="mt-40 text-white p-4">
		<ul className="hover:text-n-purple gap-4">
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
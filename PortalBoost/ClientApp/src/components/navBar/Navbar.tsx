import {BsPerson} from 'react-icons/bs'
import { useState} from 'react'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(true)


	return (
		<div className="fixed top-0 left-0 h-screen w-30s flex flex-col
		bg-white dark:bg-gray-900 shadow-lg">
		  
		<div>
		<ul>
			<li>
				medarbetare
			</li>
			<li>
				kunder
			</li>
			</ul>	
		</div>
</div>
	)
}

export default Navbar
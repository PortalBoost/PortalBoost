import {BsPerson} from 'react-icons/bs'
import { useState} from 'react'

const MobileNavbar: React.FC<{}> = () => {

const [isOpen, setIsOpen] = useState(true)


	return (
		<div className="fixed bottom-0 h-s30 w-screen flex flex-col
		 dark:bg-n-gray">
		  
		<div className="mt-40 text-white p-4">
		<ul className="hover:text-n-purple gap-4">
			{/* länk till personsida */}
			{/* ikon till personer */}
			<li>
				medarbetare
			</li>
			{/* ikon till företag */}
			{/* länk till companysida */}
			<li>
				kunder
			</li>
			</ul>	
		</div>
</div>
	)
}

export default MobileNavbar
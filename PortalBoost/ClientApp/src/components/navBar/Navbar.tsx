import {BsPerson} from 'react-icons/bs'

const Navbar = () => {




	return (
		<div className="display-flex absolute top-0 mb-3 p-5 w-screen">
			<div>
				<h1>logo here</h1>
			</div>
			<div className="bg-gray-600 border-yellow-400 rounded-xl p-1 flex flex-shrink-0" >
				<p><BsPerson /></p>
			</div>
		</div>
	)
}

export default Navbar
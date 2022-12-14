import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom"

const PageNotFound = () => {


	return (
		<div className="animate-fade-in flex flex-col max-w-lg p-4 items-center mx-auto">
			<p className="mt-2 text-6xl sm:text-9xl font-sans font-bold text-n-purple-dark">404 </p>
			<p className="text-2xl sm:text-4xl">Page not found</p>
			<button className="mt-2 flex items-center gap-1 px-4 justify-center">
				<AiOutlineHome className="text-xl" />
				<Link to="/">Return home</Link>
			</button>
		</div>
	)
}

export default PageNotFound
import { Link } from "react-router-dom"

const PageNotFound = () => {


	return (
		<div>
			<p>Error 404 - Page not found </p>
			<button className="bg-n-sky p-1 rounded-md hover:shadow-lg">
				<Link to="/">Return home</Link>
			</button>
		</div>
	)
}

export default PageNotFound
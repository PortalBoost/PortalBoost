import { Link } from "react-router-dom"

const PageNotFound = () => {


	return (
		<div className="animate-fade-in">
			<p>Error 404 - Page not found </p>
			<button className="">
				<Link to="/">Return home</Link>
			</button>
		</div>
	)
}

export default PageNotFound
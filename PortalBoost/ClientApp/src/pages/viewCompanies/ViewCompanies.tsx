import PreviewCard from '../../components/previewCard/PreviewCard'
import { Link } from 'react-router-dom'

const ViewCompanies = () => {

	//data for testing
	const testCompanies = [
		{companyId: 1, companyName: "Company 1", companyDescription: "This is a company. A fine one. Not a regular company, but a company still. Company with a goal. What more do you want to know? ..."},
		{companyId: 2, companyName: "Company 2", companyDescription: "This is a another fine company"},
		{companyId: 3, companyName: "Company 3", companyDescription: "Yet another company! Wish to know more? Click"},
		{companyId: 4, companyName: "Company 4", companyDescription: "One more. Here you can find info if you dare"},
		{companyId: 5, companyName: "Company 5", companyDescription: "Company. company. company. company. company. and company."},
	]

	return (
		<div> Here's a bunch of companies. 
			{/* search bar */}

			{/* preview card */}
			<Link to="/companies/testCompany">
			{testCompanies.map((company) => (
				<PreviewCard 
				key={company.companyId} 
				id={company.companyId}
				companyName={company.companyName} 
				companyDescription={company.companyDescription}/>))}
			</Link>
		</div>
	)
}

export default ViewCompanies
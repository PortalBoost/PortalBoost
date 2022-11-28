import { useRecoilValue } from "recoil"
import companyDataState from "../../atoms/companyDataState"
import useFetchData from "../../hooks/useFetchData";
import CompanyModel from "../../models/companyModel";
import PreviewCard from '../../components/previewCard/PreviewCard'
import { Link } from 'react-router-dom'

const ViewCompanies = () => {

	

	const companyData = useRecoilValue(companyDataState)
	const { getUsersAtCompany } = useFetchData();

	// Lägg in ID från valt company in som id parameter, och så får man tillbaka en array med anställda som jobbar på det företaget
	const usersWorkingAtASpecificCompanyTest = getUsersAtCompany({ id: "6374cf17193bf25d5515a513" } as CompanyModel)

	//TODO:change to real data
	//data for testing
	const testCompanies = [
		{ companyId: 1, companyName: "Company 1", companyDescription: "This is a company. A fine one. Not a regular company, but a company still. Company with a goal. What more do you want to know? ... wfaofjaweiofjaweifjaoeifjaoiegfaoifjaoifjaoiejfaiojefoaijeföoiajefioajeöfiojaeöiofjaoiefjaöoiejfaeöiofjaöeoifjaöoiefjaöoiergjaeöoifja" },
		{ companyId: 2, companyName: "Company 2", companyDescription: "This is a another fine company" },
		{ companyId: 3, companyName: "Company 3", companyDescription: "Yet another company! Wish to know more? Click" },
		{ companyId: 4, companyName: "Company 4", companyDescription: "One more. Here you can find info" },
		{ companyId: 5, companyName: "Company 5", companyDescription: "Company. company. company. company. company. and company." },
	]

	const companyCardsGrid = "m-10 xl:ml-0 lg:ml-60 md:m-10 md:ml-40sm:m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"

	return (
		<div className=" animate-fade-in">
			<h1 className="flex justify-center m-10"> Våra kunder</h1>
			<div className={companyCardsGrid}>
				{/* search bar */}

				{/* preview card */}
				{companyData.map((company)=>(
					<Link to={`/companies/${company.id}`}>
						<PreviewCard key={company.id} company={company} />
					</Link>
				))}
					

			</div>
		</div>
	)
}

export default ViewCompanies

// {testCompanies.map((company) => (
// 	<Link to="./testCompany">
// 		<PreviewCard
// 			key={company.companyId}
// 			id={company.companyId}
// 			companyName={company.companyName}
// 			companyDescription={company.companyDescription} />
// 	</Link>))}
// key={company.companyId} 
// id={company.companyId}
// company={company}
// companyName={company.companyName} 
// companyDescription={company.companyDescription}/>
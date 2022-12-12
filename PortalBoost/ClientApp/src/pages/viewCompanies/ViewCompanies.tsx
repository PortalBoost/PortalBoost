import { useRecoilValue } from "recoil"
import companyDataState from "../../atoms/companyDataState"
import useFetchData from "../../hooks/useFetchData";
import CompanyModel from "../../models/companyModel";
import PreviewCard from '../../components/previewCard/PreviewCard'
import { Link } from 'react-router-dom'

const ViewCompanies = () => {

	const companyData = useRecoilValue(companyDataState)


	const companyCardsGrid = "m-10 xl:ml-0 lg:ml-60 md:m-10 md:ml-40sm:m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"

	return (
		<div className="animate-fade-in">
			<h1 className="flex justify-center m-10"> Meet the clients</h1>
			<div className={companyCardsGrid}>
				{/* search bar */}

				{/* preview card */}
				{companyData.map((company) => (
					<Link to={`/companies/${company.id}`} key={company.id} {...company}>
						<PreviewCard key={company.id} company={company} />
					</Link>
				))}


			</div>
		</div>
	)
}

export default ViewCompanies
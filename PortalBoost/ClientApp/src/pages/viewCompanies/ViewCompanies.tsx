import { useRecoilValue } from "recoil"
import companyDataState from "../../atoms/companyDataState"
import useFetchData from "../../hooks/useFetchData";
import CompanyModel from "../../models/companyModel";


const ViewCompanies = () => {
	const companyData = useRecoilValue(companyDataState)
	const { getUsersAtCompany } = useFetchData();

	// Lägg in ID från valt company in som id parameter, och så får man tillbaka en array med anställda som jobbar på det företaget
	const usersWorkingAtASpecificCompanyTest = getUsersAtCompany({ id: "6374cf17193bf25d5515a513" } as CompanyModel)

	return (
		<div> Here's a bunch of companies. </div>
	)
}

export default ViewCompanies
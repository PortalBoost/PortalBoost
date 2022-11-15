import { useRecoilState, useRecoilValue } from "recoil"
import companyDataState from "../atoms/companyDataState"
import userDataState from "../atoms/userDataState"
import { getCompanies } from "../services/API/companyService"
import { getUsers } from "../services/API/userService"


const useFetchData = () => {
	const [userData, setUserData] = useRecoilState(userDataState)
	const [companyData, setCompanyData] = useRecoilState(companyDataState)


	// TODO: Loop error.
	const getUsers = async () => {
		const users = await getUsers();
		console.log(users)

	}

	return {
		getUsers
	}
}

export default useFetchData

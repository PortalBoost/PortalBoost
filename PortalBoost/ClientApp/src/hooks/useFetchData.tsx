import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import companyDataState from "../atoms/companyDataState"
import userDataState from "../atoms/userDataState"
import CompanyModel from "../models/companyModel"
import EmployeeModel from "../models/employeeModel"
import { fetchCompanies } from "../services/API/companyService"
import { fetchUsers } from "../services/API/userService"


const useFetchData = () => {
	const [userData, setUserData] = useRecoilState(userDataState)
	const [companyData, setCompanyData] = useRecoilState(companyDataState)



	const setData = () => {
		getUsers();
		getCompanies();
	}

	const getUsers = async () => {
		const users = await fetchUsers();
		setUserData(users);
	}

	const getCompanies = async () => {
		const companies = await fetchCompanies();
		setCompanyData(companies)
	}

	// Show users working at a specific company
	const getUsersAtCompany = ({ id }: CompanyModel) => companyData.filter((company) => company.id === id).map((x) => x.employees)

	// Show companies a specific user works at
	const getEmployeeAssignments = ({ id }: EmployeeModel) => companyData.filter((company) => company.employees.map((x) => x.id).includes(id))


	return {
		getUsers,
		getCompanies,
		getEmployeeAssignments,
		getUsersAtCompany,
		setData
	}
}

export default useFetchData

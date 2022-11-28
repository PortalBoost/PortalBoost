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



	const setData = async () => {
		await getUsers();
		await getCompanies();
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
	const getUsersAtCompany = ({ id }: CompanyModel) => companyData.find((company) => company.id === id)?.employees.map((employee) => employee)

	// Shows the current company for a given employee
	const getEmployeeAssignment = ({ id }: EmployeeModel) => companyData.find((company) => company.employees.some((employee) => employee.id == id))


	return {
		getUsers,
		getCompanies,
		getEmployeeAssignment,
		getUsersAtCompany,
		setData
	}
}

export default useFetchData

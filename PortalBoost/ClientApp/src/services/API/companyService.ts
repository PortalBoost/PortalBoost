import UserModel from "../../models/userModel";

const BASE_URL = "/api/Company"


const fetchCompanies = async () => {

	const response = await fetch(`${BASE_URL}/AllCompanies`)
	if (!response.ok) throw new Error(`Error: ${response.status}`)
	const data = await response.json();
	return data;
}

const addUserToCompany = async (companyId: string | undefined, user: UserModel) => {

	const reqOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user)
	};

	const response = await fetch(`${BASE_URL}/AddEmployee/${companyId}`, reqOptions)
	if (!response.ok) return response.status;
	// const data = await response.json();
	// return data;
}

export { fetchCompanies, addUserToCompany }

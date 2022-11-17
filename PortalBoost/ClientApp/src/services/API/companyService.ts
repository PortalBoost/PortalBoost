
const BASE_URL = "/api/Company"


const fetchCompanies = async () => {

	const response = await fetch(`${BASE_URL}/AllCompanies`)
	if (!response.ok) throw new Error(`Error: ${response.status}`)
	const data = await response.json();
	return data;
}


export { fetchCompanies }

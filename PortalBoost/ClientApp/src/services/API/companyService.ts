
const BASE_URL = "/api/Company"

//TODO: Separate the fetch and handling of request into separate APIhandler/facade? Default body/header stuff.
const getCompanies = async () => {

	// Handle response, network error??
	const response = await fetch(`${BASE_URL}/AllCompanies`)
	if (!response.ok) throw new Error(`Error: ${response.status}`)
	const data = await response.json();
	return data;
}

const getCompany = async () => {

}

export { getCompanies }

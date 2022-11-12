
const BASE_URL = "/api/User"

//TODO: Separate the fetch and handling of request into separate APIhandler/facade? Default body/header stuff.
const getUsers = async () => {

	// Handle response, network error??
	const response = await fetch(`${BASE_URL}/AllUsers`)
	if (!response.ok) throw new Error(`Error: ${response.status}`)
	const data = await response.json();
	return data;
}

const getUser = async () => {

}

export { getUsers }


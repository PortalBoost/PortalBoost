import EmployeeModel from "../../models/employeeModel";
import UserModel from "../../models/userModel";

const BASE_URL = "/api/User"


//TODO: Separate the fetch and handling of request into separate APIhandler/facade/hook? Default body/header stuff.
const getUsers = async () => {

	// Handle response, network error?
	const response = await fetch(`${BASE_URL}/AllUsers`)
	if (!response.ok) throw new Error(`Error: ${response.status}`)
	const json = await response.json();

	// const data = json.map((user: UserModel) => {
	// 	return user as EmployeeModel
	// });

	//TODO: There must be a better way of not getting the password prop. Casting to EmployeeModel doesn't work.
	const data = json.map((employee: UserModel) => {
		employee.password = ""
		return employee
	})
	return data
}

const loginUser = async (username: string, password: string) => {

	const loginInfo = {
		username: username,
		password: password
	};

	const reqOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(loginInfo)
	};

	const response = await fetch(`${BASE_URL}/LoginPass`, reqOptions)
	if (!response.ok) {
		return response.status;
	}
	const data = await response.json();
	return data;
}

export { getUsers, loginUser }


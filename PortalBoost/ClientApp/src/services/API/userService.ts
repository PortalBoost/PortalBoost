import EmployeeModel from "../../models/employeeModel";
import UserModel from "../../models/userModel";
import * as fetchWrapper from "../utils/fetchWrapper";

const BASE_URL = "/api/User"

const fetchUsers = async () => {
	const request = await fetchWrapper.get<EmployeeModel[]>(`${BASE_URL}/AllUsers`)

	return request.map((emp: UserModel) => {
		emp.password = ""
		return emp
	})
}

/**
 * Tries to log in a user.
 * @returns a User object if the fetched promise was resolved, or null if the fetched promise was rejected.
 */
const loginUser = async (username: string, password: string) => {

	type loginInfo = {
		username: string,
		password: string
	}

	const userInfo = {
		username: username,
		password: password
	};

	// TODO: Proper error handling without using null?
	const user = await fetchWrapper.post<loginInfo, UserModel>(`${BASE_URL}/LoginPass`, userInfo)
		.catch(() => { return null; })
	return user;
}


const updateUser = async (updatedUser: UserModel) => {
	const userRequest = await fetchWrapper.post<UserModel, UserModel>(`${BASE_URL}/UpdateUser`, updatedUser).
		catch(() => { return null })
	return userRequest;
}

export { fetchUsers, loginUser, updateUser }


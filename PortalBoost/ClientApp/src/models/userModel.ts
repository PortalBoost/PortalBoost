import EmployeeModel from "./employeeModel"

interface UserModel extends EmployeeModel {
	password?: string;
	hash?: string;
	salt?: string;
}

export default UserModel;
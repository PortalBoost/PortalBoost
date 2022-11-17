import EmployeeModel from "./employeeModel";

export default interface CompanyModel {
	id: string;
	name: string;
	description?: string[];
	techniques?: string[];
	systemsUsed: string[];
	employees: EmployeeModel[];
}
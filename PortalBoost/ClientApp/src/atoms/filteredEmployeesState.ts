import { atom } from "recoil";
import EmployeeModel from "../models/employeeModel";
import userDataState from "./userDataState";

const filteredEmployeesState = atom<EmployeeModel[]>({
	key: "filteredEmployees",
	default: userDataState
});

export default filteredEmployeesState;
import { atom } from "recoil";
import EmployeeModel from "../models/employeeModel";

const userDataState = atom<EmployeeModel[]>({
	key: "userData",
	default: []
});

export default userDataState;
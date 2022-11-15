import { atom } from "recoil";
import EmployeeModel from "../models/employeeModel";

const userDataState = atom({
	key: "userData",
	default: <EmployeeModel[]>([])
});

export default userDataState;
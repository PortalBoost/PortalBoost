import { atom } from "recoil";
import CompanyModel from "../models/companyModel";

const companyDataState = atom({
	key: "companyData",
	default: <CompanyModel[]>([])
});

export default companyDataState;
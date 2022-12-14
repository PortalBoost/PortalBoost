import { atom } from "recoil";
import CompanyModel from "../models/companyModel";

const companyDataState = atom<CompanyModel[]>({
	key: "companyData",
	default: []
});

export default companyDataState;
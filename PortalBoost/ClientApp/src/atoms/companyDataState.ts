import { atom } from "recoil";

const companyDataState = atom({
	key: "companyData",
	default: []
});

export default companyDataState;
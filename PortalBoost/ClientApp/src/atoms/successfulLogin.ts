import { atom } from "recoil";

const successfullLogin = atom({
	key: "successfullLogin",
	default: false
});

export default successfullLogin;
import { atom } from "recoil";

const successfullLoginState = atom({
	key: "successfullLogin",
	default: false
});

export default successfullLoginState;
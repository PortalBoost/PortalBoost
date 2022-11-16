import { atom } from "recoil";

const successfullLoginState = atom<boolean>({
	key: "successfullLogin",
	default: false
});

export default successfullLoginState;
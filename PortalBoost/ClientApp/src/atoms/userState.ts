import { atom } from "recoil";
import { testUser } from "../models/testUser";

const userState = atom({
	key: "userState",
	default: {} as testUser
});

export default userState;
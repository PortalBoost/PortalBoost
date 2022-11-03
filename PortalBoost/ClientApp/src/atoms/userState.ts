import { atom } from "recoil";
import { TestUser } from "../models/TestUser";

const userState = atom({
	key: "userState",
	default: {} as TestUser
});

export default userState;
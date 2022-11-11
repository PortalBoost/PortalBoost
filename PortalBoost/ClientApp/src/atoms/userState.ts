import { atom } from "recoil";
import UserModel from "../models/userModel";

const userState = atom({
	key: "userState",
	default: {} as UserModel
});

export default userState;
import { atom } from "recoil";
import UserModel from "../models/userModel";

const userState = atom<UserModel>({
	key: "userState",
	default: {} as UserModel
});

export default userState;
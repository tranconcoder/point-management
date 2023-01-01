import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoSlice {
	id: string;
	avatar: string;
	name: {
		firstName: string;
		lastName: string;
		fullName: string;
	};
	majorName: string;
}

const initialState: UserInfoSlice = {
	id: "",
	avatar: "",
	name: {
		firstName: "",
		lastName: "",
		get fullName() {
			return this.firstName + " " + this.lastName;
		},
	},
	majorName: "",
};

export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		setInfo(state, action: PayloadAction<Partial<UserInfoSlice>>) {
			const payload = action.payload;

			for (let index in payload) {
				const key = index as keyof UserInfoSlice;

				(state as any)["avatar"] = payload[key];
			}
		},
	},
});

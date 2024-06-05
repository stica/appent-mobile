import {AuthState} from "./features/auth/authSlice";

type RootState = {
	auth: AuthState;
};

export default RootState;

export type RootStateKeys = keyof RootState;

import { combineReducers } from 'redux';

import auth from './features/auth/authSlice';
import {RootStateKeys} from "./rootState";

type Reducers = {
	[K in RootStateKeys]: unknown;
};

const reducers: Reducers = {
	auth,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;

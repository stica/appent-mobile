import { configureStore } from '@reduxjs/toolkit';
import RootState from "./rootState";
import rootReducer from "./rootReducer";

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState: preloadedState as unknown,
	});
}

const store = setupStore();

export type AppThunk = typeof store.dispatch;
export default store;

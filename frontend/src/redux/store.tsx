import { configureStore } from "@reduxjs/toolkit";
import messageSliceReducer from "./chatList";
import { persistReducer, persistStore } from "redux-persist";

export const store = configureStore({
	reducer: {
		chatList: messageSliceReducer,
	},
});

export const persistore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

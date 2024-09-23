import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	messages: [],
	suggestedMessages: [],
};

const messageSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		addMessage: (state, action) => {
			state.messages.push(action.payload);
		},
		addSuggestedMessage: (state, action) => {
			state.suggestedMessages = action.payload;
		},
		editSuggestedMessage: (state, action) => {
			console.log(state.suggestedMessages);

			state.suggestedMessages.map((msg) => {
				return msg.id === action.payload.id ? { ...msg, clicked: false } : msg;
			});
		},
		deleteSuggestedMessage: (state, action) => {
			state.suggestedMessages = [];
		},
	},
});

export const { addMessage, addSuggestedMessage, editSuggestedMessage } =
	messageSlice.actions;
export default messageSlice.reducer;

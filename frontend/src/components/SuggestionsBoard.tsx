import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Paper, Stack, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { editSuggestedMessage } from "../redux/chatList";

export const SuggestionsBoard = () => {
	const dispatch = useDispatch();
	const suggestedMsgList = useSelector(
		(state: RootState) => state.chatList.suggestedMessages
	);
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const target = e.target as HTMLButtonElement;
		dispatch(
			editSuggestedMessage({
				type: "hi",
				clicked: true,
				content: target.textContent,
			})
		);
	};

	return (
		<Paper elevation={0}>
			<Stack direction={"column"} alignItems={"flex-end"}>
				{suggestedMsgList.map(
					(
						suggestedMsg: { type: string; clicked: boolean; content: string },
						index: number
					) => {
						if (!suggestedMsg.clicked) {
							return (
								<Stack padding={2} key={index}>
									<Button variant={"text"} onClick={handleClick}>
										<Typography textTransform={"lowercase"} color={"#5A5A5A"}>
											{suggestedMsg.content}
										</Typography>
									</Button>
								</Stack>
							);
						} else {
							return;
						}
					}
				)}
			</Stack>
		</Paper>
	);
};

export default SuggestionsBoard;

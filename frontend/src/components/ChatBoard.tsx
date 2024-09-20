import React, { useState, useEffect, SyntheticEvent } from "react";
import ChatBubble from "./ChatBubble";
import SubmitBar from "./SubmitBar";
import { Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Message = {
	name: string;
	message: string;
};

const ChatBoard = () => {
	const messageList = useSelector(
		(state: RootState) => state.chatList.messages
	);

	return (
		<Paper variant="outlined" sx={{ padding: "10px", height: "100%" }}>
			<Stack direction={"column"} height={1} overflow={"hidden"}>
				<Stack alignSelf={"flex-end"} overflow={"auto"} height={"100%"}>
					{messageList.map((message: Message, index: number) => {
						return <ChatBubble key={index} {...message}></ChatBubble>;
					})}
				</Stack>
				<Stack>
					<SubmitBar></SubmitBar>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default ChatBoard;

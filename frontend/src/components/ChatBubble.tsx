import { Stack, Typography } from "@mui/material";
import React from "react";

const ChatBubble = ({ message, name }: { message: string; name: string }) => {
	return message === "fan" ? (
		<Stack>
			<Typography>{name}</Typography>
			<Typography>{message}</Typography>
		</Stack>
	) : (
		<Stack>
			<Typography>{name}</Typography>
			<Typography>{message}</Typography>
		</Stack>
	);
};

export default ChatBubble;

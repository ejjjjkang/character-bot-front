import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Bubble = styled.div`
	border-radius: 15px;
	background-color: #3797f0;
	display: inline-block;
	color: white;
	word-wrap: break-word;
	margin: 0.5em;
	width: fit-content;
`;

const ChatBubble = ({ message, name }: { message: string; name: string }) => {
	return message === "fan" ? (
		<Stack>
			<Bubble>
				<Typography>{message}</Typography>
			</Bubble>
		</Stack>
	) : (
		<Bubble>
			<Stack p={2} spacing={30 / 10}>
				<Typography>{message}</Typography>
			</Stack>
		</Bubble>
	);
};

export default ChatBubble;

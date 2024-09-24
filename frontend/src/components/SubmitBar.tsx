import React, { useState, useEffect, FormEvent } from "react";
import {
	Button,
	Stack,
	TextField,
	Paper,
	FormControl,
	Popper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TuneIcon from "@mui/icons-material/Tune";
import { addMessage, addSuggestedMessage } from "../redux/chatList";
// @ts-ignore
import { MentionsInput, Mention } from "react-mentions";
import SuggestionsBoard from "./SuggestionsBoard";
import Popup from "./Popup";
import axios from "axios";
import { port } from "../port.js";

const SubmitBar: React.FC = () => {
	const [suggest, setSuggest] = useState(false);
	const [input, setInput] = useState<string>("");
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	const handleChange = (e: { target: { value: string } }) => {
		setInput(e.target.value);
		setSuggest(false);
	};

	const handleSubmit = () => {
		if (input == "") {
			return;
		}
		dispatch(addMessage({ name: "User", message: input }));
		setInput("");
		setSuggest(false);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const loadData = (msg: string) => {
		axios
			.post(`${port}upload_postings/`, msg)
			.then((res: any) => {
				if (res.status == 200) {
					dispatch(addSuggestedMessage(res));
				}
			})
			.catch(() => {
				dispatch(
					addSuggestedMessage([
						{
							type: "audience-focused",
							content:
								"Hi Emily! Thanks for sticking around for two years! \
								Starting TikTok content was about expanding my reach and experimenting \
								with more dynamic and fun ways to express beauty tips and trends. \
								It’s been a blast! How about you, any plans to explore content creation? 🤔👀💬",
							clicked: false,
						},
						{
							type: "creator-focused",
							content:
								"Hey Emily! 😊🎀 Jumping onto TikTok was a no-brainer for me! It’s such a fun platform for quick, creative content \
							and really lets me express different sides of beauty and makeup trends. \
							Thinking of giving it a go? I say, dive in and let your creativity flow! 🤪✨💕",
							clicked: false,
						},
						{
							type: "message-focused",
							content:
								"Hey Emily! Oh, diving into TikTok was all about connecting with more amazing folks like you and sharing bite-sized fun!\
								 It felt like the perfect place to bring some extra sparkle 🌟 and creativity.\
								 Are you thinking about starting too? 😊",
							clicked: false,
						},
					]) //TODO: type, content
				);
			});
	};

	useEffect(() => {
		if (suggest) {
			loadData(input);
		}
	}, [suggest]);

	return (
		<Stack direction={"column"}>
			{suggest ? <SuggestionsBoard input={input} setInput={setInput} /> : null}
			<Stack direction={"row"}>
				<Paper
					sx={{ flexGrow: 5, height: "auto", padding: "10px" }}
					component="form"
					onSubmit={(e: FormEvent) => {
						e.preventDefault();
						handleSubmit();
					}}
				>
					<FormControl sx={{ width: "100%" }}>
						<Stack direction={"row"} alignItems={"center"}>
							<Stack sx={{ flexGrow: 4 }}>
								<MentionsInput
									singleLine={false}
									placeholder="Type a message"
									name="userTextField"
									onChange={handleChange}
									value={input}
									style={{ overflowY: "auto" }}
								>
									<Mention
										trigger="/"
										data={() => {
											// Ensure suggest is set to true if not already
											if (!suggest) {
												setSuggest(true);
											}
											// Return the actual data for the Mention component
											return [];
										}}
									></Mention>
								</MentionsInput>
							</Stack>
							<Stack>
								<Button
									type="submit"
									color="primary"
									onClick={(e: FormEvent) => {}}
								>
									Submit
								</Button>
							</Stack>
						</Stack>
					</FormControl>
				</Paper>
				<Button onClick={handleClick}>
					<TuneIcon />
				</Button>
				<Popper open={open} id={id} anchorEl={anchorEl} placement="top">
					<Popup />
				</Popper>
			</Stack>
		</Stack>
	);
};

export default SubmitBar;

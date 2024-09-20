import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
	Button,
	Stack,
	TextField,
	Paper,
	FormControl,
	Popper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/chatList";
// @ts-ignore
import { MentionsInput, Mention } from "react-mentions";
import SuggestionsBoard from "./SuggestionsBoard";
import Popup from "./Popup";

const SubmitBar = () => {
	const [suggest, setSuggest] = useState(false);
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	const handleChange = (e: { target: { value: string } }) => {
		setInput(e.target.value);
		setSuggest(false);
	};

	const handleSubmit = () => {
		console.log(input);
		dispatch(addMessage({ name: "User", message: input }));
		setInput("");
		setSuggest(false);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	return (
		<Stack direction={"column"}>
			{suggest ? <SuggestionsBoard /> : null}
			<Stack direction={"row"}>
				<Paper
					sx={{ flexGrow: 4, height: "auto", width: "100%", padding: "10px" }}
					component="form"
					onSubmit={(e: FormEvent) => {
						e.preventDefault();
						handleSubmit();
					}}
				>
					<FormControl sx={{ width: "100%" }}>
						<Stack overflow={"hidden"} direction={"row"} spacing={2}>
							<MentionsInput
								style={{ width: "100%", flexGrow: 4, margin: "10px" }}
								singleLine={true}
								placeholder="Type a message"
								name="userTextField"
								onChange={handleChange}
								value={input}
							>
								<Mention trigger="/" data={() => setSuggest(true)}></Mention>
							</MentionsInput>
							<Button
								type="submit"
								color="primary"
								onClick={(e: FormEvent) => {}}
							>
								Submit
							</Button>
						</Stack>
					</FormControl>
				</Paper>
				<Button onClick={handleClick}>Option</Button>
				<Popper open={open} id={id} anchorEl={anchorEl} placement="top">
					<Popup />
				</Popper>
			</Stack>
		</Stack>
	);
};

export default SubmitBar;

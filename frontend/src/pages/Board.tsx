import React, { useEffect, useState } from "react";
import {
	Button,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
	Tooltip,
	TextField,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Tiptap } from "../components/editor";
import axios from "axios";
import Textarea from "@mui/joy/Textarea";
import AppBar from "@mui/material";
import { port } from "../port.js";
import Popup from "../components/Popup";
import SubmitBar from "../components/SubmitBar";
import ChatBoard from "../components/ChatBoard";
import SubbestionsBoard from "../components/SuggestionsBoard";

const Board = () => {
	return (
		<>
			<Stack
				p={5}
				spacing={40 / 8}
				overflow={"hidden"}
				direction="row"
				width={1}
				height={"100%"}
				minHeight={"100vh"}
				justifyContent={"center"}
			>
				<Stack flexGrow={1} flexDirection={"column"}></Stack>
				<Stack flexGrow={5} flexDirection={"column"}>
					<Stack flexGrow={5}>
						<ChatBoard></ChatBoard>
					</Stack>
					{/* <Stack>
						<Button>Submit</Button>
					</Stack> */}
				</Stack>
				<Stack flexGrow={1} flexDirection={"column"}></Stack>

				{/* <Popup></Popup> */}
			</Stack>
		</>
	);
};

export default Board;

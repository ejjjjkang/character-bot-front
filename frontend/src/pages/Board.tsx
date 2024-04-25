import React, { useEffect, useState } from "react";
import {
	Button,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Tiptap } from "../components/editor";
import axios from "axios";
import Textarea from "@mui/joy/Textarea";
import AppBar from "@mui/material";

const Board = () => {
	const [db, setDb] = useState([]);
	const [load, setLoad] = useState({
		personalities: "",
		hobbies: "",
		lifestyles: "",
		language_styles: "",
		emojis: "",
		writing_topics: "",
	});
	const [process, setProcess] = useState(false);
	const [file, setFile] = useState();

	const loadFile = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const reader = new FileReader();
		reader.onload = (e) => {
			const text = (e.target as FileReader).result;
			const json = csvToJson(text as string);
			handleCsv({ key: json });
		};
	};

	function csvToJson(csv: string) {
		const lines = csv.split("\n");
		const result = [];
		const headers = lines[0].split(",");

		for (let i = 1; i < lines.length; i++) {
			const obj: { [key: string]: string } = {}; // Add index signature to object type declaration
			const currentline = lines[i].split(",");
			for (let j = 0; j < headers.length; j++) {
				obj[headers[j].trim()] = currentline[j].trim();
			}
			result.push(obj);
		}
		return JSON.stringify(result);
	}

	const handleOnChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	function handleCsv(csvToJson: { key: string }) {
		axios
			.post("http://localhost:8000/update_posting", csvToJson)
			.then((res) => {})
			.catch((errors) => {
				console.log(errors);
			});
	}

	function handleSave(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
		// axios.get("http://localhost:8000/api/db").then((res) => {
		// 	setDb(res.data);
		// 	setLoad(true);
		// });
	}

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
				<Stack flexGrow={1}>
					<Stack
						direction={"row"}
						alignItems={"center"}
						justifyContent={"space-between"}
					>
						<Stack>
							<Typography sx={{ display: "inline" }} mt={2}>
								Data
							</Typography>
						</Stack>
						<Stack direction={"row"} alignItems={"center"}>
							<form>
								<input
									type={"file"}
									id={"csvFileInput"}
									accept={".csv"}
									onChange={handleOnChange}
								/>

								{/* <Button onClick={(e) => loadFile(e)}>Import</Button> */}
							</form>

							{process ? <Button>Load</Button> : null}
							<InfoIcon></InfoIcon>
						</Stack>
					</Stack>
					<Stack direction={"column"}>
						<Stack
							direction={"row"}
							mt={2}
							alignItems={"center"}
							justifyContent={"space-between"}
						>
							<Typography sx={{ display: "inline" }} mr={2}>
								Context
							</Typography>
							<Button onClick={handleSave}>Save</Button>
						</Stack>
						<Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Personality</Stack>
								<Textarea
									placeholder="please load your data"
									value={load.personalities}
									disabled={load.personalities ? false : true}
								></Textarea>
							</Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Hobbies</Stack>
								<Textarea
									placeholder="please load your data"
									value={load.hobbies}
									disabled={load.hobbies ? false : true}
								></Textarea>
							</Stack>
						</Stack>
					</Stack>
					<Stack direction={"column"} mt={2}>
						<Stack alignSelf={"flex-start"}>
							<Typography sx={{ display: "inline" }}>Style</Typography>
						</Stack>
						<Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Writing topics</Stack>
								<Textarea
									placeholder="please load your data"
									value={load.writing_topics}
									disabled={load.writing_topics ? false : true}
								></Textarea>
							</Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Speech tones</Stack>
								<Textarea
									placeholder="please load your data"
									value={load.language_styles}
									disabled={load.language_styles ? false : true}
								></Textarea>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Stack flexGrow={5} flexDirection={"column"}>
					<Stack m={2} flexDirection={"row"} alignItems={"flex-end"}>
						<Stack flexGrow={1}>
							<Textarea placeholder="please write a social media post topic"></Textarea>
						</Stack>
						<Stack mt={2}>
							<Button>Generate</Button>
						</Stack>
						<Stack mt={2}>
							<Button>Refresh</Button>
						</Stack>
					</Stack>
					<Stack m={2} flexGrow={5}>
						<Paper variant="outlined" sx={{ padding: "10px", height: "100%" }}>
							<Tiptap></Tiptap>
						</Paper>
					</Stack>
					<Stack m={2}>
						<Button>Submit</Button>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
};

export default Board;

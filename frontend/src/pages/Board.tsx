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
import { port } from "../port.js";

const Board = () => {
	const [context, setContext] = useState({
		personalities: [],
		hobbies: [],
		lifestyles: [],
	});
	const [style, setStyle] = useState({
		language_styles: [],
		emojis: [],
		writing_topics: [],
	});
	const [generate, setGenerate] = useState();

	const [process, setProcess] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const reader = new FileReader();
	const [topic, setTopic] = useState("");
	const [profile, setProfile] = useState("aaa222");

	interface profileJson {
		profile_id: string;
	}

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const sellectFile = (e.target as HTMLInputElement)?.files?.[0];
		if (sellectFile) {
			setFile(sellectFile);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (file) {
			reader.onload = (e) => {
				const text = e.target?.result;

				const json = csvToJson(text as string);
				handleCsv(json as any);
				// console.log(text);
			};
			reader.readAsText(file);
		}
	};

	function csvToJson(csv: string) {
		const lines = csv.split("\n");
		const result = {
			profile_id: "aaa222",
			postings: [
				{
					text_id: 1,
					text: "Denim haul! 👖✨ I feel like it’s sooo hard to find denim I like so I always buy extra to try!! Plus it helps since I like to try new styles and brands 🤗🛍️ Comment “Link” for all outfit details!💖",
					reactions: [
						"I mean sure some are big or whatever, but honestly, everything looks good on you!! 🫶🏻",
						"It really is hard!! incorrect sizing, too low rise, not high rise enough😂, Link please! Love all the jeans 😍",
						"Love them. Link pls!, You seem to keep all the ones I would return lol",
					],
					date: "4/4/2024",
				},
			],
		};
		// const headers = lines[0].split(",");

		return result;
	}

	function handleCsv(csvToJson: object) {
		axios
			.post(`${port}upload_postings/`, csvToJson)
			.then((res: any) => {
				if (res.status === 201) {
					get_characteristics({ profile_id: profile });
				}
			})
			.catch((errors) => {
				console.log(errors);
				// setLoad({
				// 	personalities: "hi",
				// 	hobbies: "hi",
				// 	lifestyles: "hi",
				// 	language_styles: "hi",
				// 	emojis: "hi",
				// 	writing_topics: "hi",
				// });
			});
	}

	async function get_characteristics(profileJson: object) {
		axios
			.post(`${port}get_context_style/`, profileJson)
			.then((res) => {
				console.log(res.data.context);
				setContext({
					personalities: JSON.parse(res.data.context.personalities),
					hobbies: JSON.parse(res.data.context.hobbies),
					lifestyles: JSON.parse(res.data.context.lifestyles),
				});
				setStyle({
					language_styles: JSON.parse(res.data.style.language_styles),
					emojis: JSON.parse(res.data.style.emojis),
					writing_topics: JSON.parse(res.data.style.writing_topics),
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	async function handleSaveContext(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
		axios
			.put(`${port}update_context/`, {
				profile_id: profile,
				context,
			})
			.then((res) => {
				console.log(res);
			});
	}

	async function handleSaveStyle(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
		axios
			.put(`${port}update_style/`, {
				profile_id: profile,
				style,
			})
			.then((res) => {
				console.log(res);
			});
	}

	//profile id and topic
	function handleGenerate(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();

		axios
			.post(`${port}generate_board_content/`, {
				profile_id: profile,
				topic: topic,
			})
			.then((res) => {
				let data = res.data.content.content;

				setGenerate(data);
			});
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

								<Button onClick={handleSubmit}>Import</Button>
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
							<Button onClick={handleSaveContext}>Save</Button>
						</Stack>
						<Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Personality</Stack>
								<Textarea
									placeholder="please load your data"
									value={context.personalities}
									disabled={context.personalities ? false : true}
								></Textarea>
							</Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Hobbies</Stack>
								<Textarea
									placeholder="please load your data"
									value={context.hobbies}
									disabled={context.hobbies ? false : true}
								></Textarea>
							</Stack>
						</Stack>
					</Stack>
					<Stack direction={"column"} mt={2}>
						<Stack
							direction={"row"}
							mt={2}
							alignItems={"center"}
							justifyContent={"space-between"}
						>
							<Typography sx={{ display: "inline" }}>Style</Typography>
							<Button onClick={handleSaveStyle}>Save</Button>
						</Stack>
						<Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Writing topics</Stack>
								<Textarea
									placeholder="please load your data"
									value={style.writing_topics}
									disabled={style.writing_topics ? false : true}
								></Textarea>
							</Stack>
							<Stack mt={2}>
								<Stack alignSelf={"flex-start"}>Speech tones</Stack>
								<Textarea
									placeholder="please load your data"
									value={style.language_styles}
									disabled={style.language_styles ? false : true}
								></Textarea>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Stack flexGrow={5} flexDirection={"column"}>
					<Stack m={2} flexDirection={"row"} alignItems={"flex-end"}>
						<Stack flexGrow={1}>
							<Textarea
								placeholder="please write a social media post topic"
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							></Textarea>
						</Stack>
						<Stack mt={2}>
							<Button onClick={handleGenerate}>Generate</Button>
						</Stack>
						{/* <Stack mt={2}>
							<Button onClick={handleGenerate}>Refresh</Button>
						</Stack> */}
					</Stack>
					<Stack m={2} flexGrow={5}>
						<Paper variant="outlined" sx={{ padding: "10px", height: "100%" }}>
							<Tiptap content={generate}></Tiptap>
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

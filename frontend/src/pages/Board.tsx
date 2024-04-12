import React, { useEffect, useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Tiptap from "../components/editor";
import axios from "axios";

const Board = () => {
	const [db, setDb] = useState([]);
	const [load, setLoad] = useState(false);
	useEffect(() => {}, []);

	function handleLoad(e: React.MouseEvent<HTMLElement>) {
		e.preventDefault();
		// axios.get("http://localhost:8000/api/db").then((res) => {
		// 	setDb(res.data);
		// 	setLoad(true);
		// });
	}

	return (
		<Grid container spacing={2} p={3}>
			<Grid item xs={4}>
				<div>
					<div>Data</div>
					<Button onClick={(e) => handleLoad(e)}>Import</Button>
				</div>
				<div>
					Context
					<Button>Save</Button>
					<Paper sx={{ padding: "10px" }}>
						<Tiptap></Tiptap>
					</Paper>
				</div>
				<div>
					Style
					<Button>Save</Button>
					<Paper sx={{ padding: "10px" }}>
						<Tiptap></Tiptap>
					</Paper>
				</div>
				<div>
					Audience
					<Button>Save</Button>
					<Paper sx={{ padding: "10px" }}>
						<Tiptap></Tiptap>
					</Paper>
				</div>
			</Grid>
			<Grid item xs={8}>
				<Paper sx={{ padding: "10px" }}>
					<Tiptap></Tiptap>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Board;

import React from "react";
import Board from "./pages/Board";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

const theme = createTheme({
	status: {
		danger: orange[500],
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Board></Board>
			</div>
		</ThemeProvider>
	);
}

export default App;

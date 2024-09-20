import { Paper, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, SyntheticEvent } from "react";

const Suggestion = () => {
	return (
		<Stack padding={2}>
			<Typography>dsdfs</Typography>
		</Stack>
	);
};

export const SuggestionsBoard = () => {
	return (
		<Paper elevation={0}>
			<Stack direction={"row"}>
				<Suggestion />
				<Suggestion />
				<Suggestion />
				<Suggestion />
			</Stack>
		</Paper>
	);
};

export default SuggestionsBoard;

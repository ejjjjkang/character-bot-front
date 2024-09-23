import { Paper, Stack, Avatar, Typography } from "@mui/material";
import {
	uniqueNamesGenerator,
	Config,
	adjectives,
	colors,
	animals,
} from "unique-names-generator";

export const AudienceProfPane = () => {
	const randomName: string = uniqueNamesGenerator({
		dictionaries: [adjectives, colors, animals],
	}); // big_red_donkey

	return (
		<Stack direction={"row"}>
			<Avatar></Avatar>
			<Stack justifyContent={"center"} pl={2}>
				<Typography fontSize={"1.2rem"}>@{randomName}</Typography>
			</Stack>
		</Stack>
	);
};

import React, { useEffect, useState } from "react";
import { Stack, Button, Menu, MenuItem } from "@mui/material";
import ChatBoard from "../components/ChatBoard";
import { AudienceProfPane } from "../components/AudienceProfPane";

const Board = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Stack
				p={2}
				spacing={40 / 8}
				overflow={"hidden"}
				direction="row"
				width={1}
				height={1}
				minHeight={"100vh"}
				justifyContent={"center"}
			>
				<Stack flexGrow={1}>
					<Button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						Dashboard
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</Stack>
				<Stack flexGrow={4} flexDirection={"column"} sx={{ width: "10%" }}>
					<Stack p={3} spacing={40 / 10}>
						<AudienceProfPane />
					</Stack>
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

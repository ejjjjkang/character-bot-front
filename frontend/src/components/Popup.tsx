import React, { useState, useEffect } from "react";
import {
	Button,
	Paper,
	Divider,
	Stack,
	Typography,
	Slider,
	FormControl,
	RadioGroup,
	FormLabel,
	FormControlLabel,
	Radio,
	Checkbox,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const Popup = () => {
	return (
		<Paper sx={{ padding: 1 }}>
			<Stack flexDirection={"column"} sx={{ width: "100%" }}>
				<Stack>
					<Typography>AI Message personalization</Typography>
				</Stack>
				<Stack flexDirection={"row"}>
					<Stack p={3} spacing={20 / 2}>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Message Style
							</FormLabel>

							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="myTone"
								name="radio-buttons-group"
							>
								<Stack flexDirection={"row"}>
									<FormControlLabel
										value="expressive"
										control={<Radio />}
										label="Expressive / Informal"
									/>
									<HelpIcon />
								</Stack>
								<FormControlLabel
									value="neutral"
									control={<Radio />}
									label="Neutral"
								/>
								<FormControlLabel
									value="formal"
									control={<Radio />}
									label="Formal"
								/>
								<FormControlLabel
									value="myTone"
									control={<Radio />}
									label="My usual tones"
								/>
							</RadioGroup>
						</FormControl>
					</Stack>
					<Stack p={3} spacing={20 / 2}>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Emoji Usage
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="none"
									control={<Radio />}
									label="None"
								/>
								<FormControlLabel value="low" control={<Radio />} label="Low" />
								<FormControlLabel
									value="medium"
									control={<Radio />}
									label="Medium"
								/>
								<FormControlLabel
									value="high"
									control={<Radio />}
									label="High"
								/>
							</RadioGroup>
						</FormControl>
					</Stack>
				</Stack>
				<Divider></Divider>
				<Stack flexDirection={"row"}>
					<Stack p={3} spacing={20 / 2}>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Message Length
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Short"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Medium"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Long"
								/>
							</RadioGroup>
						</FormControl>
					</Stack>
					<Stack p={4} spacing={20 / 2} sx={{ width: "100%" }}>
						<Typography>topic related</Typography>
						<Slider
							marks
							defaultValue={50}
							aria-label="Default"
							valueLabelDisplay="auto"
						/>
					</Stack>
				</Stack>
				<Stack p={4} spacing={20 / 2}>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="AI-generated label"
					/>
				</Stack>

				<Button
					sx={{
						backgroundColor: "#745CF1",
						color: "white",
						borderRadius: "40px",
					}}
				>
					Generated reply prompts
				</Button>
			</Stack>
		</Paper>
	);
};

export default Popup;

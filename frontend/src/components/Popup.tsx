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

const Popup = () => {
	return (
		<Paper sx={{ padding: 2 }}>
			<Stack flexDirection={"column"}>
				<Stack>
					<Typography>AI Message personalization</Typography>
				</Stack>
				<Stack flexDirection={"row"}>
					<Stack p={4} spacing={20 / 2}>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Message type
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="female"
								name="radio-buttons-group"
							>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Expressive / Informal"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Neutral"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Formal"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="My usual tones"
								/>
							</RadioGroup>
						</FormControl>
					</Stack>
					<Divider></Divider>
					<Stack p={4} spacing={20 / 2}>
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
									value="female"
									control={<Radio />}
									label="None"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Low"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="Medium"
								/>
								<FormControlLabel
									value="other"
									control={<Radio />}
									label="High"
								/>
							</RadioGroup>
						</FormControl>
					</Stack>
				</Stack>
				<Divider></Divider>
				<Stack flexDirection={"row"}>
					<Stack p={4} spacing={20 / 2}>
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Message length
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
					<Stack p={4} spacing={20 / 2}>
						<Typography>topic related</Typography>
						<Slider
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

				<Button>Generated reply prompt</Button>
			</Stack>
		</Paper>
	);
};

export default Popup;

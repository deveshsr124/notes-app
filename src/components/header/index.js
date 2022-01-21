import React from "react";
import "./header.css";
import { Typography } from "@mui/material";
import {
	Box,
	InputBase,
	IconButton,
	Snackbar,
	ClickAwayListener,
	Icon,
	AppBar,
	Toolbar,
} from "@mui/material";
import { LightMode } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import { useThemeContextValue } from "../../context/ThemContextProvider";
const Header = () => {
	const [{ isDark }, dispatch] = useThemeContextValue();
	return (
		<div>
			<AppBar
				elevation="0"
				sx={{
					backgroundColor: "#FFF",
					borderBottom: "1px solid #E0E0E0",
					color: "black",
				}}
			>
				<Toolbar>
					<div style={{ flex: "0.2" }}>
						<Typography fontSize="16px" fontWeight="bold">
							My Notes
						</Typography>
					</div>
					<Box flex="0.6" alignItems="center">
						<SearchBar />
					</Box>

					<Box flex="0.2">
						<IconButton
							onClick={() => {
								dispatch({
									type: "SET_UI_MODE",
								});
							}}
						>
							<LightMode />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

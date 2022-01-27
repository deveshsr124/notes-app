import React from "react";
import "./header.css";
import { Typography } from "@mui/material";
import {
	Box,
	// InputBase,
	// IconButton,
	// Snackbar,
	// ClickAwayListener,
	// Icon,
	AppBar,
	Toolbar,
} from "@mui/material";
// import { LightMode } from "@mui/icons-material";
import { DescriptionOutlined } from "@mui/icons-material";
import SearchBar from "./SearchBar";
// import { useThemeContextValue } from "../../context/ThemContextProvider";
const Header = ({ searchterm, setSearchTerm }) => {
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
					<div style={{ flex: "0.3", paddingLeft: "10px" }}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Typography fontSize="16px" fontWeight="bold" paddingRight="10px">
								Notes
							</Typography>
							<DescriptionOutlined sx={{ fontSize: "25px" }} />
						</div>
					</div>
					<Box flex="0.7" alignItems="center">
						<SearchBar searchterm={searchterm} setSearchTerm={setSearchTerm} />
					</Box>

					{/*<Box flex="0.2">
						<IconButton
							onClick={() => {
								dispatch({
									type: "SET_UI_MODE",
								});
							}}
						>
							<LightMode />
						</IconButton>
						</Box>*/}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

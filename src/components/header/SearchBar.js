import React from "react";
import { Box, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./header.css";
const SearchBar = () => {
	return (
		<div className="search-container">
			<div className="search-icon-div">
				<Search />
			</div>
			<InputBase
				placeholder="Search"
				className="input-search"
				// classes={{
				//   root: classes.inputRoot,cd
				//   input: classes.inputInput
				// }}
				// value={searchTerm}
				// onClick={() => setFocussed(true)}
				// inputProps={{ "aria-label": "search" }}
				// onChange={event => setSearchTerm(event.target.value)}
				// onKeyDown=
			/>
		</div>
	);
};

export default SearchBar;

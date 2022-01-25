import React from "react";
import { Box } from "@mui/material";
import { Delete } from "@mui/icons-material";
const Toolbar = ({ dispatch, id, title, content }) => {
	console.log("id", id);
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "right",
					fontSize: "20px",
					cursor: "pointer",
				}}
			>
				<Delete
					fontSize="20px"
					onClick={() => {
						dispatch({
							type: "DELETE_NOTE",
							payload: id,
						});
					}}
				/>
			</Box>
		</div>
	);
};

export default Toolbar;

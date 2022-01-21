import React, { useState } from "react";
import { Paper, InputBase } from "@mui/material";
import "./textbox.css";
import CreateNote from "./CreateNote";
const NotesCreate = () => {
	const [infocus, setInFocus] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<div>
			<Paper elevation="5" className="create-notes-container">
				<InputBase
					className="title-input"
					placeholder={infocus === true ? "Title" : "Take a note..."}
					inputProps={{ "aria-label": "note title" }}
					onFocus={() => setInFocus(true)}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				{infocus === true ? (
					<CreateNote
						setInFocus={setInFocus}
						title={title}
						content={content}
						setContent={setContent}
					/>
				) : null}
			</Paper>
		</div>
	);
};

export default NotesCreate;

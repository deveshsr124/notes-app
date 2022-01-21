import React from "react";
import Header from "../header";
import NotesCreate from "../NotesCreate";
const Home = () => {
	return (
		<div>
			<Header />
			<div
				style={{ marginTop: "10%", display: "flex", justifyContent: "center" }}
			>
				<NotesCreate />
			</div>
		</div>
	);
};

export default Home;

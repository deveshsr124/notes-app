import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeContextProvider } from "./context/ThemContextProvider";
import { initialState, themereducer, notesreducer } from "./reducers";
import { NotesContextProvider } from "./context/NotesContext";
ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider initialState={initialState} reducer={themereducer}>
			<NotesContextProvider initialState={initialState} reducer={notesreducer}>
				<App />
			</NotesContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

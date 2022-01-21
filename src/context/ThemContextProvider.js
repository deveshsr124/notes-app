import { createContext, useContext, useReducer } from "react";

// for creating the context
export const ThemeContext = createContext();

// context provider
export const ThemeContextProvider = ({ initialState, reducer, children }) => {
	return (
		<ThemeContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</ThemeContext.Provider>
	);
};

// for getting the data out of context
export const useThemeContextValue = () => useContext(ThemeContext);

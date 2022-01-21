export const initialState = {
	isDark: null,
	notes: [],
};

export const themereducer = (state, action) => {
	switch (action.type) {
		case "SET_UI_MODE":
			const isDark = false;
			return { ...state, isDark: !isDark };
		default:
			return state;
	}
};

export const notesreducer = (state, action) => {
	switch (action.type) {
		case "CREATE_NOTE":
			let id = 0;
			const note = {
				id: id,
				title: action.title,
				content: action.content,
			};
			id += 1;
			return { ...state, notes: [note] };
		default:
			break;
	}
};

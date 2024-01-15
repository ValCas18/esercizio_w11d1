//src/reducers/addReducer.js

const addReducer = (state = { user: null }, action) => {
	switch (action.type) {
		case "ADD_COMPANY":
			return { add: action.payload };
		case "REMOVE_COMPANY":
			return { add: null };
		default:
			return state;
	}
};

export default addReducer;

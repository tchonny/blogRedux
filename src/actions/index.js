import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {
	return async function (dispatch) {
		const response = await jsonPlaceHolder.get("/posts");
		dispatch({ type: "FETCH_POST", payload: response.data });
	};
};

import starWars from "../apis/starWars";

export const fetchResults = category => {
    return async dispatch => {
        const response = await starWars.get(`/${category}`);
        console.log(response.data.results)
        dispatch({type:'FETCH_RESULTS', payload: response.data.results});
    }
}
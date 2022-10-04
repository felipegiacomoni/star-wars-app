import starWars from "../apis/starWars";

export const fetchResults = category => {
    return async dispatch => {
        const response = await starWars.get(`/${category.param}`);
        
        dispatch({type:'FETCH_RESULTS', payload: response.data.results});
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}

import starWars from "../apis/starWars";

export const fetchResults = (category, page) => {
    return async dispatch => {
        const response = await starWars.get(`/${category.param}${page}`);

        dispatch({type:'FETCH_RESULTS', payload: response.data});
        dispatch({type:'FETCH_PAGINATION', payload: response.data})
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}



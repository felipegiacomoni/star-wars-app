import starWars from "../apis/starWars";

export const fetchResults = (category, page) => {
    return async dispatch => {
        dispatch({type:'FETCH_RESULTS_LOADING'})
        const response = await starWars.get(`/${category.param}${page}`)

        dispatch({type:'FETCH_RESULTS_LOADED', payload: response.data})
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}



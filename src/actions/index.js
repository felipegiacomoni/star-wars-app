import starWars from "../apis/starWars";

export const fetchResults = category => {
    return async dispatch => {
        const response = await starWars.get(`/${category.param}`);
        
        dispatch({type:'FETCH_RESULTS', payload: response.data.results});
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}

export const fetchDetails = url => {
    return async dispatch => {
        console.log('fetchDetails: ' + url)
        const response = await starWars.get(url);
        console.log(url);
        dispatch({type:'FETCH_DETAILS', payload: response.data})
    }
}
import starWars from "../apis/starWars";

export const fetchResults = category => {
    return async dispatch => {
        const response = await starWars.get(`/${category}`);
        dispatch({type:'FETCH_RESULTS', payload: response.data.results});
    }
}

export const filterResults = filter => {
    return (dispatch, getState) => {
        const filteredResults = getState().results.filter(elem => elem.name === filter);
        console.log(filteredResults);
        dispatch({type: 'FETCH_RESULTS', payload: filteredResults})
    }
}
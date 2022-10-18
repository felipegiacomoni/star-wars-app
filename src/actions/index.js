import starWars from "../apis/starWars";

export const fetchResults = (category, search, page) => {
    return async dispatch => {
        dispatch({type:'FETCH_RESULTS_LOADING'})
        const params = _getParameters(search, page)
        const response = await starWars.get(`/${category.param}${params}`)

        dispatch({type:'FETCH_RESULTS_LOADED', payload: response.data})
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}

export const setTerm = term => {
    return dispatch => {
        dispatch ({type:'SET_TERM', payload: term})
    }
}

const _getParameters = (search, page) => {
    if(page !== ''){
        return '/?' + page
    }
    if(search !== ''){
        return '/?search=' + search
    }
    return ''
}



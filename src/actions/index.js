import starWars from "../apis/starWars";

export const fetchResults = (category, search, page) => {
    return async dispatch => {
        dispatch({type:'FETCH_RESULTS_LOADING'})
        const params = _getParameters(search, page)
        const response = await starWars.get(`/${category.param}${params}`)

        dispatch({type:'FETCH_RESULTS_LOADED', payload: response.data})
        dispatch({type:'SET_TERM', payload: search})
        dispatch({type:'SELECT_CATEGORY', payload: category})
    }
}

const _getParameters = (search, page) => {
    if(search !== '' && page !== ''){
        return '/?search=' + search + '&' + page
    }
    if(search !== ''){
        return '/?search=' + search
    }
    if(page !== ''){
        return '/?' + page
    }
    return ''
}



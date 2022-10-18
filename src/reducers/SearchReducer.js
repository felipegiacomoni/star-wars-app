const INITIAL_STATE = {
    category: '',
    term: ''
}

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SELECT_CATEGORY':
            return {...state, category: action.payload};
        case 'SET_TERM':
            return {...state, term: action.payload};
        default:
            return state;
    }
}

export default SearchReducer;
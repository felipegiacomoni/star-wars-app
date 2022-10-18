const INITIAL_STATE = {
    category: ''
}

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SELECT_CATEGORY':
            return {...state, category: action.payload};
        default:
            return state;
    }
}

export default SearchReducer;
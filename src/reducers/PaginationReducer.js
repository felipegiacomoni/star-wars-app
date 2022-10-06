const PaginationReducer = (state = null, action) => {
    switch (action.type){
        case 'FETCH_PAGINATION':
            return {next: action.payload.next, previous: action.payload.previous};
        default:
            return state;
    }
}

export default PaginationReducer;
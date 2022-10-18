const INITIAL_STATE = {
    results: [],
    isLoading: false,
    next: null,
    previous: null
}

const ResultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'FETCH_RESULTS_LOADED':
            return {...state, 
                    isLoading: false, 
                    results: action.payload.results, 
                    next: action.payload.next, 
                    previous: action.payload.previous,
                };
        case 'FETCH_RESULTS_LOADING':
            return {...state, isLoading: true}
        default:
            return state;
    }
}

export default ResultsReducer;
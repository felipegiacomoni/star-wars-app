const ResultsReducer = (state = [], action) => {
    switch (action.type){
        case 'FETCH_RESULTS':
            return action.payload.results;
        default:
            return state;
    }
}

export default ResultsReducer;
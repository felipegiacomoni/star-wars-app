import { combineReducers } from 'redux';
import ResultsReducer from './ResultsReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    results: ResultsReducer,
    search: SearchReducer
});
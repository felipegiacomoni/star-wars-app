import { combineReducers } from 'redux';
import ResultsReducer from './ResultsReducer';
import CategoryReducer from './CategoryReducer'

export default combineReducers({
    results: ResultsReducer,
    category: CategoryReducer
});
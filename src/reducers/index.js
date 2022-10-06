import { combineReducers } from 'redux';
import ResultsReducer from './ResultsReducer';
import CategoryReducer from './CategoryReducer';
import PaginationReducer from './PaginationReducer';

export default combineReducers({
    results: ResultsReducer,
    category: CategoryReducer,
    pagination: PaginationReducer
});
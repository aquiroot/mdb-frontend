import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
	ui: uiReducer,
	movies: moviesReducer,
});

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { LevelsReducer, ExercisesReducer } from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    levels: LevelsReducer,
    exercises: ExercisesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk)); //Se crea el Store
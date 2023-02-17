import { createStore, combineReducers } from 'redux';
import { LevelsReducer, ExercisesReducer } from './reducers';

const rootReducer = combineReducers({
    levels: LevelsReducer,
    exercises: ExercisesReducer,
});

export default createStore(rootReducer); //Se crea el Store
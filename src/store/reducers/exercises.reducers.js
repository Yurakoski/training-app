import { EXERCISES } from '../../constants/data/index';

const initialState = {
    exercises: EXERCISES,
    filteredExercises: [],
    selected: null,
};

const ExercisesReducer = (state = initialState, action) =>{ //el action modificará el estado inicial

    return state;
}

export default ExercisesReducer;
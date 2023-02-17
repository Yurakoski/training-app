import { LEVELS } from '../../constants/data/index';

const initialState = {
    levels: LEVELS,
    selected: null,
};

const LevelsReducer = (state = initialState, action) =>{ //el action modificará el estado inicial

    return state;
}

export default LevelsReducer;
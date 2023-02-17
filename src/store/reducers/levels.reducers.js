import { LEVELS } from '../../constants/data/index';
import { levelsTypes } from '../types';

const { SELECT_LEVEL } = levelsTypes;

const initialState = {
    levels: LEVELS,
    selected: null,
};

const LevelsReducer = (state = initialState, action) =>{ //el action modificará el estado inicial

    switch(action.type){
        case SELECT_LEVEL:
            const indexLevel = state.levels.findIndex((lev) => lev.id === action.categoryID);
            if (indexLevel === -1) return state;
        
            return {
                ...state,
                selected: state.levels[indexLevel],
        }
        default: return state;
        }
}

export default LevelsReducer;
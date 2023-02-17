import { levelsTypes } from '../types/index';

const { SELECT_LEVEL} = levelsTypes;

export const selectLevel = (id) => ({
    type: SELECT_LEVEL,
    categoryID: id,
})
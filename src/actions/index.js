import * as types from '../constants/actionTypes'

export const test = text => ({
    type: types.TEST,
    text,
});
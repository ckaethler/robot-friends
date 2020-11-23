import { CHANGE_SEARCHFIELD } from './Types.Redux';

export const setSearchField = text => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});
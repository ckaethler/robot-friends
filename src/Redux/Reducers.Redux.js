import { CHANGE_SEARCHFIELD } from './Types.Redux';

const initialState = {
    searchField: '',
};

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            // return Object.assign({}, state, { searchField: action.payload })
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}
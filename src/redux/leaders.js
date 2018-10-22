import * as ActionTypes from './ActionTypes';

export const Leaders = (state = { errMess: null, leaders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        default:
            return state;
    }
};
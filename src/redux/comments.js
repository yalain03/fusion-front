import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};

        case ActionTypes.UPDATE_COMMENT:
            var comment = action.payload;
            var oldComment = state.comments.filter((com) => com._id === comment._id)[0];
            oldComment.comment = comment.comment;
            return {...state};

        case ActionTypes.DELETE_COMMENT:
            var commentId = action.payload;
            return {...state, comments: state.comments.filter((com) => com._id != commentId)};

        default:
            return state;
    }
};
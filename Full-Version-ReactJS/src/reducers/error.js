const getErrorMatches = (actionType) =>
    /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType)

const errorReducer = (state = {}, action) => {
    const matches = getErrorMatches(action.type)

    if (!matches) {
        return state
    }

    const [, requestName, requestStatus] = matches
    return {
        ...state,
        [requestName]: requestStatus === 'FAILURE' ? action.error : null
    }
}

export default errorReducer
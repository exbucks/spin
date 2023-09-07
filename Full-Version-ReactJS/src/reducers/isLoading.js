const getLoadingMatches = (actionType) => /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType)

const isLoadingReducer = (state = {}, action) => {
  const matches = getLoadingMatches(action.type)

  if (!matches) return state

  const [, requestName, requestStatus] = matches
  return {
    ...state,
    [requestName]: requestStatus === 'REQUEST'
  }
}

export default isLoadingReducer

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { loadState, saveState } from './localstorage'

const exampleInitialState = {
  apiData: {}
}

export const actionTypes = {
  SAVEDATA: 'SAVEDATA',
  GETDATA: 'GETDATA'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SAVEDATA:
      let dataArr = action.apiData
      // https://daveceddia.com/react-redux-immutability-guide/
      return {
        ...state,
        apiData: {
          ...state.apiData,
          [dataArr[0]]: dataArr[1]
        }
      }
    default:
      return state
  }
}

// ACTIONS
export const saveData = apiData => {
  return { type: actionTypes.SAVEDATA, apiData }
}

const persistedState = loadState()

export function initializeStore(initialState = exampleInitialState) {
  const store = createStore(
    reducer,
    persistedState,
    composeWithDevTools(applyMiddleware())
  )

  store.subscribe(() => {
    saveState({
      apiData: store.getState().apiData
    })
  })

  return store
}

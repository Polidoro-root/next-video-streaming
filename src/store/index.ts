import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware: Middleware<any, any, any>[]) => {
  const isProductionEnv = process.env.NODE_ENV === 'production'

  const appliedMiddleware = applyMiddleware(...middleware)

  if (!isProductionEnv) {
    const { composeWithDevTools } = require('redux-devtools-extension')

    return composeWithDevTools(appliedMiddleware)
  }

  return appliedMiddleware
}

const combinedReducers = combineReducers({})

const reducer = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return combinedReducers(state, action)
  }
}

export const storeWrapper = createWrapper(
  createStore(reducer, bindMiddleware([thunkMiddleware]))
)

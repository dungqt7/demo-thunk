import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import appReducer from '../reducer/index';
export default function configureStore() {
    const middlewares = [ thunk]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const store = createStore(appReducer, middlewareEnhancer)
    return store
  }
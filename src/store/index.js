import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { rootReducer } from './rootReducer'
import createSagaMiddleware from "redux-saga"
import logger from 'redux-logger'
import { rootSaga } from './rootSaga'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== "production" && window?.__REDUX_DEVTOOLS__ ) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers) 

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

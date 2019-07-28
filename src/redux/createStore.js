import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import initializePuzzleSaga from './sagas'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(initializePuzzleSaga)

export default store

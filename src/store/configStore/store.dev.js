import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { sagas as rootSagas } from 'store/sagas'
import rootReducer from 'store/reducers'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';

const initialState = {}

const persistConfig = {
    timeout: 0,
    key: 'email-app-root-key',
    storage: storage('appDB'),
    whitelist: [ "messages", "users" ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const saga = createSagaMiddleware()

const middlewares = [ saga ]

const composeEnhancers = composeWithDevTools({})

const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))

saga.run(rootSagas)

export default store

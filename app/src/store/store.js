import { persistStore } from 'redux-persist';
import StoreProd from './configStore/store.prod'
import StoreDev from './configStore/store.dev'

let store
if (process.env.NODE_ENV === 'production') {
    store = StoreProd
} else {
    store = StoreDev
}

export const persistor = persistStore(store)

//persistor.purge()

export default store

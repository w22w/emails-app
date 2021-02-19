import { combineReducers } from 'redux'
import messages from 'store/messages/reducer'
import users from 'store/users/reducer'
import appConstants from 'common/appConstants'

const rootReducer = combineReducers({
    [ appConstants.store.route.messages ]: messages,
    [ appConstants.store.route.users ]: users,
})

export default rootReducer

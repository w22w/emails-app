import { all, delay, put, takeEvery } from 'redux-saga/effects'

import * as ACTIONS from './actions'
import { updateUser } from 'store/users/actions'
import appConstants from 'common/appConstants'
import history from 'common/history'

export function* addMessageHandler(action) {
    yield put(ACTIONS.addMessage.request(action.payload))
    try {
        const { userId, username, destination, createdAt, messageId } = action.payload
        yield put(updateUser({
            userId,
            username,
            messageId,
            destination,
            createdAt
        }))
        
        yield put(ACTIONS.addMessage.success(action.payload))
        
        yield delay(0.5)
        if (destination === appConstants.destinations.inbox) {
            history.push(appConstants.router.inbox)
        } else {
            history.push(appConstants.router.outbox)
        }
    } catch (e) {
        yield put(ACTIONS.addMessage.failure(e))
    }
}

export function* clearMessagesHandler(action) {
    yield put(ACTIONS.clearMessages.success(action.payload))
}

export function* markMessagesReadForUserHandler(action) {
    yield put(ACTIONS.markMessagesReadForUser.success(action.payload))
}

export function* watchMessagesSaga() {
    yield all([
        takeEvery(ACTIONS.addMessage.TRIGGER, addMessageHandler),
        takeEvery(ACTIONS.clearMessages.TRIGGER, clearMessagesHandler),
        takeEvery(ACTIONS.markMessagesReadForUser.TRIGGER, markMessagesReadForUserHandler),
    
    ])
}

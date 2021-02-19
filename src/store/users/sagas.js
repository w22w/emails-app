import { all, put, takeEvery } from "redux-saga/effects";
import * as ACTIONS from "./actions";

export function* updateUserHandler(action) {
    yield put(ACTIONS.updateUser.request(action.payload));
    try {
        const { userId, username, destination, createdAt, messageId } = action.payload;
        if (userId) {
            yield put(
                ACTIONS.updateUser.success({
                    user: { userId, username },
                    destination,
                    messageId,
                    createdAt,
                })
            );
        }
    } catch (e) {
        yield put(ACTIONS.updateUser.failure(action.payload));
    }
}

export function* clearUsersHandler() {
    yield put(ACTIONS.clearUsers.success())
}

export function* markAllReadHandler(action) {
    yield put(ACTIONS.markAllRead.success(action.payload))
}

export function* watchUsersSaga() {
    yield all([
        takeEvery(ACTIONS.updateUser.TRIGGER, updateUserHandler),
        takeEvery(ACTIONS.clearUsers.TRIGGER, clearUsersHandler),
        takeEvery(ACTIONS.markAllRead.TRIGGER, markAllReadHandler),
    
    ]);
    
}

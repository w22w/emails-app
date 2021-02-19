import { all, spawn } from "redux-saga/effects";

import { watchMessagesSaga } from "store/messages/sagas";
import { watchUsersSaga } from "store/users/sagas";

export const sagas = function* rootSaga() {
  yield all([ spawn(watchMessagesSaga), spawn(watchUsersSaga) ]);
};

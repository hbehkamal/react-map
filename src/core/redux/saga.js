import { takeLatest, all } from "redux-saga/effects";
import { ZOOM } from "./constants";

function* doSomething() {}

function* actionWatcher() {
  yield takeLatest(ZOOM, doSomething);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

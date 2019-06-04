import { call, put } from "redux-saga/effects";
import axios from "../../services/api";
import { Creators as RepositoriesAction } from "../ducks/repositories";
export function* getRepositories() {
  try {
    const response = yield call(axios.get, "users/diego3g/repos");
    yield put(RepositoriesAction.getSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesAction.getFailure());
  }
}

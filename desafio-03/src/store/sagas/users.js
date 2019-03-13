import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';

export default function* addUser(action) {
  try {
    const { data } = yield call(api.get, `users/${action.payload.userData.name}`);

    const isDuplicated = yield select(state => state.favorites.data.some(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addFavoriteFailure('Usuário duplicado'));
    } else {
      const userData = {
        user: {
          id: data.id,
          name: data.name,
          login: data.login,
          avatar: data.avatar_url,
        },
        lngLat: {
          ...action.payload.user.lngLat,
        },
      };

      yield put(UserActions.addFavoriteSuccess(userData));
    }
  } catch (err) {
    yield put(UserActions.addFavoriteFailure('Erro ao adicionar usuário'));
  }
}

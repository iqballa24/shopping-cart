/**
 * test scenario for authSlice reducer
 *
 * - authSlice reducer
 *  - should initially set auth to initial state
 *  - should return username, token, and isLoggedIn state is true when given setAuth action
 *  - should return the initial state when given unsetAuthUser action
 */

import store from '@/store';
import { authSliceAction } from '@/store/auth';

describe('authSlice reducer', () => {
  it('should initially set auth to initial state', () => {
    // arrange
    const initialState = {
      isLoggedIn: false,
      username: '',
      token: null,
    };

    // action
    const state = store.getState().persist.auth;

    // assert
    expect(state).toEqual(initialState);
  });

  it('should return username, token, and isLoggedIn is true when given setAuth action', () => {
    // arrange
    const initialState = {
      isLoggedIn: true,
      username: 'Tengku Iqbal Nugraha',
      token: '123456789',
    };

    // action
    store.dispatch(authSliceAction.setAuth(initialState));
    const state = store.getState().persist.auth;

    // assert
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when given unsetAuthUser action', () => {
    // arrange
    const initialState = {
      isLoggedIn: false,
      username: '',
      token: null,
    };

    // action
    store.dispatch(authSliceAction.unsetAuthUser());
    const state = store.getState().persist.auth;

    // assert
    expect(state).toEqual(initialState);
  });
});

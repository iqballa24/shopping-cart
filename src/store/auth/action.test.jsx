/**
 * skenario test
 *
 * - asyncLogin thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action correctly when data fetching failed
 *
 * - asyncLogout thunk
 *  - should dispatch action correctly when action thunk called
 */

import API from '@/lib/service/API';
import toast from 'react-hot-toast';
import { asyncLogin, asyncLogout } from './action';
import { authSliceAction } from '.';
import {
  describe,
  it,
  afterEach,
  beforeEach,
  expect,
  jest,
} from '@jest/globals';

const fakeSuccessResponse = {
  data: { token: 'eyJhbGciOiJIUzI1NiIsInR' },
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncLogin thunk', () => {
  beforeEach(() => {
    API._login = API.login;
  });

  afterEach(() => {
    API.login = API._login;

    delete API._login;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    API.login = () => Promise.resolve(fakeSuccessResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.success = jest.fn();

    // action
    await asyncLogin('test_username', 'test_password')(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      authSliceAction.setAuth({
        token: fakeSuccessResponse.data.token,
        username: 'test_username',
      })
    );
    expect(toast.success).toHaveBeenCalledWith('Login successfull');
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // arrange
    API.login = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.error = jest.fn();

    // action
    await asyncLogin('test_username', 'test_password')(dispatch);

    // assert
    expect(toast.error).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncLogout thunk', () => {
  it('should dispatch action correctly when action thunk called', () => {
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    toast.success = jest.fn();

    // action
    asyncLogout()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(authSliceAction.unsetAuthUser());
    expect(toast.success).toHaveBeenCalledWith('Log out successful');
  });
});

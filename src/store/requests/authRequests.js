import { createBackendAxiosRequest } from '.';

export const signUpUserRequest = async (email, password, name) => createBackendAxiosRequest({
  method: 'post',
  url: '/auth/signup',
  data: {
    email, password, name,
  },
});

export const signInUserRequest = async (email, password) => createBackendAxiosRequest({
  method: 'post',
  url: '/auth/signin',
  data: { email, password },
});
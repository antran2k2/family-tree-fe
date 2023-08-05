import {api} from '../../Services/api';
import {authenticate} from './authenticate';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    authenticate: authenticate(build),
  }),
  overrideExisting: true,
});

export const {useAuthenticateMutation} = userApi;

import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {Response} from '../../Store/Response/types';

export const authenticate = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<AuthPayload, AuthenRequest>({
    query: body => ({
      url: '/auth/login',
      method: 'POST',
      body: body,
    }),
    transformResponse: (response: AuthPayload, meta, arg) => {
      return response;
    },
    async onQueryStarted({}, {dispatch, queryFulfilled}) {
      try {
        const {meta} = await queryFulfilled;
      } catch (e) {
        console.log('e', e);
      }
    },
  });

export type UserAuthen = {
  id: string;
  userName: string;
  email: string;
  fullName: string;
  jwtToken: string;
  refreshToken: string;
  detailNguoiDung: {};
};
export type AuthenRequest = {
  username: string;
  password: string;
};
export type AuthPayload = {
  token: string;
  type: string;
  id: number;
  username: string;
  role: string[];
};

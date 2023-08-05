import {Config} from '../Config';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {RootState} from '../Store';

const baseQuery = fetchBaseQuery({baseUrl: Config.API_URL});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};

const prepareHeaders = (headers: any, {getState}: any) => {
  // getState() giúp lấy ra toàn bộ state trong store
  // getState().user lấy ra state trong userSlice
  const state = getState() as RootState;
  const token = state.authentication.jwtToken;
  // Nếu có token thì thêm vào headers
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return headers;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
// api.middleware =
//   ({dispatch}) =>
//   next =>
//   action => {
//     console.log(
//       '🛠 LOG: 🚀 --> ---------------------------------------------------------🛠 LOG: 🚀 -->',
//     );
//     console.log('🛠 LOG: 🚀 --> ~ file: api.ts ~ line 124 ~ action', action);

//     console.log(
//       '🛠 LOG: 🚀 --> ---------------------------------------------------------🛠 LOG: 🚀 -->',
//     );

//     return next(action);
//   };

export const apiProfile = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: () => ({}),
  reducerPath: 'profileApi',
});
export const apiFamily = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: prepareHeaders,
  }),
  endpoints: () => ({}),
  reducerPath: 'familyApi',
});

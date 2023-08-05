import {Response} from '../Response/types';

export type UserAuthen = {
  id: string;
  userName: string;
  email: string;
  fullName: string;
  jwtToken: string;
  refreshToken: string;
};

export type AuthPayload = {
  payload: Response<UserAuthen>;
};

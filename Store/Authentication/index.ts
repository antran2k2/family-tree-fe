import {
  AuthPayload,
  UserAuthen,
} from '../../Services/authentication/authenticate';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  jwtToken: '',
  userName: '',
  password: '',
} as UserAuthen;

const slice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, {payload: {jwtToken}}: AuthPayload) => {
      // console.log('payload', jwtToken)
      if (typeof jwtToken !== 'undefined') {
        state.jwtToken = jwtToken;
      }
    },
    setAccount: (state, {payload: {resultObj}}: AuthPayload) => {
      console.log('payload', resultObj);
      if (typeof resultObj !== 'undefined') {
        state.id = resultObj.id;
        state.userName = resultObj.userName;
        state.email = resultObj.email;
        state.fullName = resultObj.fullName;
        state.password = resultObj.password;
      }
    },

    setThongTinNguoiDung: (state, {payload: {resultObj}}: any) => {
      console.log('detailNguoiDung', resultObj);
      if (typeof resultObj !== 'undefined') {
        state.detailNguoiDung = resultObj;
      }
    },
    reset: () => initialState,
  },
});

export const {
  setAccessToken,
  setAccount,
  reset,
  setDonViNguoiDung,
  setDonViLamViec,
  setThongTinNguoiDung,
} = slice.actions;

export default slice.reducer;

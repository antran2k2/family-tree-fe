import {apiProfile} from '../../Services/api';
import {
  onGetProfile,
  handleGetDonViNguoiDung,
  handleGetNguoiDungByName,
  handleGetVersionCdt,
} from '././profile';

export const profileApi = apiProfile.injectEndpoints({
  endpoints: build => ({
    useGetProfile: onGetProfile(build),
    handleGetDonViNguoiDung: handleGetDonViNguoiDung(build),
    handleGetNguoiDungByName: handleGetNguoiDungByName(build),
    handleGetVersionCdt: handleGetVersionCdt(build),
  }),
  overrideExisting: true,
});

export const {
  useUseGetProfileMutation,
  useHandleGetDonViNguoiDungQuery,
  useLazyHandleGetDonViNguoiDungQuery,
  useHandleGetNguoiDungByNameQuery,
  useLazyHandleGetNguoiDungByNameQuery,
  useHandleGetVersionCdtQuery,
  useLazyHandleGetVersionCdtQuery,
} = profileApi;

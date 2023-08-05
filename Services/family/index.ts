import {apiFamily} from '../api';
import {
  handleAddFamily,
  handleDeleteFamily,
  handleGetListFamily,
  handleGetListMembers,
} from './family';

export const familyApi = apiFamily.injectEndpoints({
  endpoints: build => ({
    handleGetListFamily: handleGetListFamily(build),
    handleGetListMembers: handleGetListMembers(build),
    handleAddFamily: handleAddFamily(build),
    handleDeleteFamily: handleDeleteFamily(build),
  }),
  overrideExisting: true,
});

export const {
  useHandleGetListFamilyQuery,
  useHandleGetListMembersQuery,
  useHandleAddFamilyMutation,
  useHandleDeleteFamilyMutation,
} = familyApi;

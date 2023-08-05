import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import {
  AuthenDonVi,
  AuthenProfile,
  UserInfo,
} from '@/Store/Authentication/types'
import { ResponseT } from '@/Store/Response/types'
import { Platform } from 'react-native'
import { Version } from '@/Store/Setting'
export const onGetProfile = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<any, any>({
    query: body => ({
      url: 'identity/Account/userprofile',
      method: 'POST',
      body,
    }),
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response: any, meta, arg) => {
      //   console.log(response)
      //setAccessToken(response)
      return response
    },
    //  invalidatesTags: ['Authenticate'],
    async onQueryStarted({}, { dispatch, queryFulfilled }) {
      try {
        const { meta } = await queryFulfilled
        // dispatch(setAccessToken(meta?.request?._bodyInit))
      } catch (e) {
        console.log('e', e)
      }
    },
  })

export const handleGetNguoiDungByName = (
  build: EndpointBuilder<any, any, any>,
) =>
  build.query<
    ResponseT<{ items: AuthenDonVi }>,
    {
      data: any
      callback?: (response: any) => void
    }
  >({
    query: ({ ...params }) => ({
      url: 'dtxd/users/byname',
      method: 'GET',
      params: {
        ...params.data,
      },
      Headers: {
        accept: 'text/html; charset=utf-8',
      },
    }),
    // providesTags: ['getDonVi'],
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      arg?.callback?.(response)
      return response
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, { queryFulfilled }) {
      try {
        const { data: updatedPost } = await queryFulfilled
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
        console.log(
          '🛠 LOG: 🚀 --> ~ file: document.ts ~ line 28 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        )
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
      } catch (e) {}
    },
  })

export const handleGetDonViNguoiDung = (
  build: EndpointBuilder<any, any, any>,
) =>
  build.query<
    ResponseT<{ items: UserInfo }>,
    {
      data: any
      callback?: (response: any) => void
    }
  >({
    query: ({ ...params }) => ({
      url: `dtxd/donvi/${params?.data?.idDonVi}`,
      method: 'GET',
      params: {
        ...params.data,
      },
      Headers: {
        accept: 'text/html; charset=utf-8',
      },
    }),
    //  providesTags: ['getDonVi'],
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      arg?.callback?.(response)
      return response
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, { queryFulfilled }) {
      try {
        const { data: updatedPost } = await queryFulfilled
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
        console.log(
          '🛠 LOG: 🚀 --> ~ file: document.ts ~ line 28 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        )
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
      } catch (e) {}
    },
  })

export const handleGetVersionCdt = (build: EndpointBuilder<any, any, any>) =>
  build.query<
    ResponseT<{ items: Version }>,
    {
      data: any
      callback?: (response: any) => void
    }
  >({
    query: ({ ...params }) => ({
      url:
        Platform.OS === 'android'
          ? 'dtxd/Version/android/cdt'
          : 'dtxd/Version/ios/cdt',
      method: 'GET',
      // params: {
      //   ...params.data,
      // },
      Headers: {
        accept: 'text/html; charset=utf-8',
      },
    }),
    //  providesTags: ['getDonVi'],
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      arg?.callback?.(response)
      return response
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, { queryFulfilled }) {
      try {
        const { data: updatedPost } = await queryFulfilled
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
        console.log(
          '🛠 LOG: 🚀 --> ~ file: document.ts ~ line 28 ~ onQueryStarted ~ handleGetVersionCdt',
          updatedPost,
        )
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        )
      } catch (e) {}
    },
  })
export type GetProfileRequest = {
  userName: string
}

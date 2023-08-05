import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {Node} from '../../Components/FamilyNode';

export type Family = {
  name: string;
  id: number;
  members: number;
};

export const handleGetListFamily = (build: EndpointBuilder<any, any, any>) =>
  build.query<
    Family[],
    {
      data: any;
      callback?: (response: any) => void;
    }
  >({
    query: ({...params}) => ({
      url: '/family/getList',
      method: 'GET',
    }),
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      arg?.callback?.(response);
      return response;
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, {queryFulfilled}) {
      try {
        const {data: updatedPost} = await queryFulfilled;
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
        console.log(
          '🛠 LOG: 🚀 --> ~ file: family.ts ~ line 36 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        );
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
      } catch (e) {}
    },
  });
export const handleGetListMembers = (build: EndpointBuilder<any, any, any>) =>
  build.query<
    Node[],
    {
      data: any;
      callback?: (response: any) => void;
    }
  >({
    query: ({...params}) => ({
      url: '/family/getFamily',
      method: 'GET',
      params: {
        ...params.data,
      },
    }),
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      arg?.callback?.(response);
      return response;
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, {queryFulfilled}) {
      try {
        const {data: updatedPost} = await queryFulfilled;
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
        console.log(
          '🛠 LOG: 🚀 --> ~ file: family.ts ~ line 72 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        );
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
      } catch (e) {}
    },
  });
export const handleAddFamily = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<
    Family,
    {
      data: any;
    }
  >({
    query: body => ({
      url: '/family/addFamily',
      method: 'POST',

      body: body.data,
    }),
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      return response;
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, {queryFulfilled}) {
      try {
        const {data: updatedPost} = await queryFulfilled;
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
        console.log(
          '🛠 LOG: 🚀 --> ~ file: family.ts ~ line 109 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        );
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
      } catch (e) {}
    },
  });
export const handleDeleteFamily = (build: EndpointBuilder<any, any, any>) =>
  build.mutation<
    {mess: string},
    {
      data: any;
    }
  >({
    query: body => ({
      url: `/family/deleteFamily/${body.data.id}`,
      method: 'DELETE',
    }),
    // Pick out data and prevent nested properties in a hook or selector
    transformResponse: (response, meta, arg) => {
      return response;
    },
    // The 2nd parameter is the destructured `MutationLifecycleApi`
    async onQueryStarted(_, {queryFulfilled}) {
      try {
        const {data: updatedPost} = await queryFulfilled;
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
        console.log(
          '🛠 LOG: 🚀 --> ~ file: family.ts ~ line 109 ~ onQueryStarted ~ updatedPost',
          updatedPost,
        );
        console.log(
          '🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------------🛠 LOG: 🚀 -->',
        );
      } catch (e) {}
    },
  });

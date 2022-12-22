import { ApiSlice } from "../../app/api/apiSlice";


export const ProfileApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: id => ({
                url: `/user/profile/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['profile']
        }),
        getInvitations: builder.query({
            query: id => ({
                url: `/user/profile/invitations/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['profile']
        })

    })

});


export const { useGetProfileQuery } = ProfileApiSlice;
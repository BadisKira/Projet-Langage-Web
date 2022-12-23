import { ApiSlice } from "../../app/api/apiSlice";


export const ProfileApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({

        getUserKanbans: builder.query({
            query: id => ({
                url: `/kanban/getUserKanbans/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['kanbans']
        }),
        getParticipedKanbans: builder.query({
            query: id => ({
                url: `/kanban/getParticipedKanbans/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['kanbans']
        }),





        // invitation part
        getInvitations: builder.query({
            query: id => ({
                url: `/kanban/getUserInvitations`,
                method: 'POST',
                body: { id }
            }),
            invalidatesTags: ['profile']
        }),
        acceptInvitation: builder.mutation({
            query: id => ({
                url: `/kanban/acceptInvitation`,
                method: 'POST',
                body: { id }
            }),
            invalidatesTags: ['profile']
        }),
        refuseInvitation: builder.mutation({
            query: id => ({
                url: `/kanban/refuseInvitation`,
                method: 'POST',
                body: { id }
            }),
            invalidatesTags: ['profile']
        })

    })

});


export const { useGetParticipedKanbansQuery, useGetUserKanbansQuery, useRefuseInvitationMutation, useGetInvitationsQuery, useAcceptInvitationMutation } = ProfileApiSlice;
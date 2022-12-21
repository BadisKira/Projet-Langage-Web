import { ApiSlice } from "../../app/api/apiSlice";

export const KanbanApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getPublicKanbans: builder.query({}),
        getKanbans: builder.query({}),
        getOneKanban: builder.query({
            query: id => ({
                url: `/kanbans?id=${id}`,
                method: "GET",
            }),
            providesTags: ['kanbans']
        }),
        addKanban: builder.mutation({
            query: kanban => ({
                query: "/kanban/create",
                method: "POST",
                body: { ...kanban }
            }), invalidatesTags: ['kanbans']
        }),
        deleteKanban: builder.mutation({
            query: id => ({
                query: `/kanbans?id=${id}`,
                method: "DELETE",
            }), invalidatesTags: ['kanbans']
        }),
        invitePeople: builder.mutation({
            query: ({ username, idkanban }) => ({
                url: "/invitations",
                method: 'POST',
                body: { username, idkanban }
            }), invalidatesTags: ['kanbans']
        })
    })
});
export const {
    useGetKanbansQuery,
    useGetOneKanbanQuery,
    useInvitePeopleMutation,
    useDeleteKanbanMutation,
    useAddKanbanMutation,
    useGetPublicKanbansQuery,

} = KanbanApiSlice; 
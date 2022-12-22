import { ApiSlice } from "../../app/api/apiSlice";

export const KanbanApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getPublicKanbans: builder.query({
            query: () => ({
                url: `/kanban/public`,
                method: "GET",
            }),
            providesTags: ['kanbans']
        }),
        getOneUserKanbans: builder.query({
            query: (iduser) => ({
                url: `/kanban/getUserKanbans/${iduser}`,
                method: "GET"
            }), providesTags: ["kanbans"]
        }),
        getOneKanban: builder.query({
            query: id => ({
                url: `/kanbans?id=${id}`,
                method: "GET",
            }),
            providesTags: ['kanbans']
        }),
        createKanban: builder.mutation({
            query: kanban => ({
                url: "/kanban/create",
                method: "POST",
                body: { ...kanban }
            }), invalidatesTags: ['kanbans']
        }),
        deleteKanban: builder.mutation({
            query: id => ({
                url: `/kanbans?id=${id}`,
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
    useGetOneUserKanbansQuery,
    useGetOneKanbanQuery,
    useInvitePeopleMutation,
    useDeleteKanbanMutation,
    useCreateKanbanMutation,
    useGetPublicKanbansQuery,

} = KanbanApiSlice; 
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
                url: `/kanban/getUserKanbans`,
                method: "POST",
                body: { iduser }

            }), providesTags: ["kanbans"]
        }),
        getOneKanban: builder.query({
            query: id => ({
                url: `/Kanban?id=${id}`,
                method: "POST",
                body: { id }
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




        //Invitaion part 
        invitePeople: builder.mutation({
            query: ({ username, idkanban }) => ({
                url: "/kanban/invite",
                method: 'POST',
                body: { username, idkanban }
            }), invalidatesTags: ['kanbans']
        }),



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
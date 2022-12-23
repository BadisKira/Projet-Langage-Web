import { ApiSlice } from "../../app/api/apiSlice";


export const ColApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getColsFromKanban: builder.query({
            query: idKanban => ({
                url: `/cols?idKanban=${idKanban}`,
                method: "GET"
            }), providesTags: ['cols']
        }),
        addNewCol: builder.mutation({
            query: col => ({
                url: "/cols",
                method: "POST",
                body: { ...col }
            }), invalidatesTags: ['cols']
        }),
        deleteCol: builder.mutation({
            query: col => ({
                url: `/kanban/deleteTaskList`,
                method: "DELETE",
                body: { ...col }
            }), invalidatesTags: ['cols , kanbans']
        })

    })
});



export const { useGetColsFromKanbanQuery, useAddNewColMutation, useDeleteColMutation } = ColApiSlice; 
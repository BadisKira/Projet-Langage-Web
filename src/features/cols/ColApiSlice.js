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
            query: id => ({
                url: `/cols?id=${id}`,
                method: "DELETE"
            }), invalidatesTags: ['cols']
        })

    })
});



export const { useGetColsFromKanbanQuery, useAddNewColMutation, useDeleteColMutation } = ColApiSlice; 
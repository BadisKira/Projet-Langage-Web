import { ApiSlice } from "../../app/api/apiSlice";


export const TaskSliceApi = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        addTask: builder.mutation({
            query: (task) => ({
                url: "/kanban/addTask",
                method: "POST",
                body: { ...task }

            }), invalidatesTags: ['kanbans']
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/kanban/deleteTask`,
                method: "POST",
                body: { id }

            }), invalidatesTags: ['kanbans']
        }),

        modifyTask: builder.mutation({
            query: (task) => ({
                url: "/kanban/modifyTask",
                method: "POST",
                body: { ...task }

            }), invalidatesTags: ['kanbans']
        }),


    })
});

export const {
    useAddTaskMutation,
    useDeleteTaskMutation,
    useModifyTaskMutation,
    useMoveTaskMutation
} = TaskSliceApi; 

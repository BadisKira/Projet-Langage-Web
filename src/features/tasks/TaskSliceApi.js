import { ApiSlice } from "../../app/api/apiSlice";


export const TaskSliceApi = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: (idCol) => ({
                url: `/tasks?idCol=${idCol}`,
                method: "GET"
            }), providesTags: ['tasks']
        }),
        createTask: builder.mutation({
            query: task => ({
                url: "/tasks",
                method: "POST",
                body: { ...task }
            }), invalidatesTags: ['tasks']
        }),
        deleteTask: builder.mutation({}),
        moveTask: builder.mutation({
            query: ({ task, newIdcol }) => ({
                url: `/moveTask/${task.id}`,
                METHOD: 'PUT',
                body: { ...task, idCol: newIdcol }
            }), invalidatesTags: ['tasks', 'cols']
        }),
        filterTask: builder.query({}),
        getMyTasks: builder.query({})
    })
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useDeleteTaskMutation,
    useMoveTaskMutation,
    useFilterTaskQuery,
    useGetMyTasksQuery
} = TaskSliceApi; 

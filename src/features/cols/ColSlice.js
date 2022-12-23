import { createSlice } from "@reduxjs/toolkit";
import {
    useGetColsFromKanbanQuery, useAddNewColMutation, useDeleteColMutation
} from "./ColApiSlice";

import { useGetTasksQuery } from "../tasks/TaskSliceApi";


const colSlice = createSlice({
    name: "col",
    initialState: [],
    reducers: {

        addNewCol: (state, action) => {
            state.push(action.payload);
        }
    }
});


export default colSlice.reducer;

export const { addNewCol } = colSlice.actions;  
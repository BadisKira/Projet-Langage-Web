import { createSlice } from "@reduxjs/toolkit";
import {
    useGetColsFromKanbanQuery, useAddNewColMutation, useDeleteColMutation
} from "./ColApiSlice";

import { useGetTasksQuery } from "../tasks/TaskSliceApi";


const colSlice = createSlice({
    name: "col",
    initialState: [], // un tableau vide de qui contient les colonnes donc on aura un truc du genre 
    // [{id:4, nameCol:"red", tasks:[{task1}, {task2},{task3},..........]}]
    reducers: {

        addNewCol: (state, action) => {
            state.push(action.payload);
        }
    }
});


export default colSlice.reducer;

export const { addNewCol } = colSlice.actions;  
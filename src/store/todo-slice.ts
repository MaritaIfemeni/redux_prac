import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoModel, TodoArrayModel } from "../models/redux-models";

const initialState: TodoArrayModel = {
    all_todos: [],
    particular_todo: {
        "userId": 0,
        "id": 0,
        "title": "",
        "completed": false
    }
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodos(state, action: PayloadAction<TodoModel[]>) {
            state.all_todos = action.payload;
        },
        setParticularTodo(state, action: PayloadAction<TodoModel>) {
            state.particular_todo = action.payload;
        }
    }
});

export default todoSlice;


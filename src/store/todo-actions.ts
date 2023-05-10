import { AnyAction, ThunkAction, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./index";
import { TodoModel } from "../models/redux-models";
import todoService from "../service/todoService";
import todoSlice from "./todo-slice";
import { UpdateTodoAction } from "../models/redux-models";

export const todoActions = todoSlice.actions;

export const fetchTodos = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getstate) => {
    if (getstate().todo.all_todos.length === 0) {
      const response: TodoModel[] = await todoService.getAllTodos();
      dispatch(todoActions.setTodos(response));
    }
  };
};

export const fetchParticularTodo = (
  todo_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getstate) => {
    const response: TodoModel = await todoService.getParticularTodoById(
      todo_id
    );
    dispatch(todoActions.setParticularTodo(response));
  };
};

// make function to update todo
export const UpdateTodo = (
  todo_id: number,
  title: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getstate) => {
    const response: TodoModel = await todoService.updateTodoById(
      todo_id,
      title
    );
    dispatch(todoActions.updateParticularTodoById(response));
  };
};

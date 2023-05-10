import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { RootState } from "./index";
import { TodoModel } from "../models/redux-models";
import todoService from "../service/todoService";
import todoSlice from "./todo-slice";

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

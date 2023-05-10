import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchTodos, fetchParticularTodo } from "../store/todo-actions";
import "./Todo.css";
import Update from "./Update";

const Todo = () => {
  const [todoId, setTodoId] = useState(1);
  const dispatch = useAppDispatch();
  const alltodos = useAppSelector((state) => state.todo.all_todos);
  const particularTodo = useAppSelector((state) => state.todo.particular_todo);
  const clickHandler = () => [dispatch(fetchTodos())];
  const searchHandler = () => {
    dispatch(fetchParticularTodo(todoId));
  };
  const checkToddo = (): boolean => {
    return alltodos.length > 0;
  };

  const checkParticularTodo = (): boolean => {
    return particularTodo.id > 0;
  };

  return (
    <div>
      <Update {...particularTodo} />
      <div>
        <label>Enter Todo Id: </label>
        <input
          onChange={(e) => {
            setTodoId(parseInt(e.target.value));
          }}
          type="number"
        ></input>
      </div>
      <button onClick={searchHandler}>Search</button>
      <div>
        <h3>Particular Todo</h3>
        {checkParticularTodo() && (
          <div className="todo-container" key={particularTodo.id}>
            <p className="todo-child1">{particularTodo.id}</p>
            <p className="todo-child2">{particularTodo.userId}</p>
            <p className="todo-child3">{particularTodo.title}</p>
            <p className="todo-child4">{particularTodo.completed}</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={clickHandler}>Fetch Todos</button>
        <div>
          <h3>All Todos</h3>
          <div className="todo-container">
            <p className="todo-child1">Id</p>
            <p className="todo-child2">UserId</p>
            <p className="todo-child3">Title</p>
          </div>
          {checkToddo() &&
            alltodos.map((todo) => (
              <div className="todo-container" key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.userId}</p>
                <p>{todo.title}</p>
                <p>{todo.completed}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

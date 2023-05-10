import Api from "./Api";
import { TodoModel } from "../models/redux-models";

//update getAllTodos with updateTodoById and updateParticularTodoById

export default {
  async getAllTodos() {
    var response = await Api().get("/todos");
    return response.data;
  },
  async updateTodoById(todo_id: number, title: string) {
    var response = await Api().put(`/todos/${todo_id}`, { title: title });
    return response.data;
  },
  async updateParticularTodoById(todo_id: number, title: string) {
    var response = await Api().put(`/todos/${todo_id}`, { title: title });
    return response.data;
  },
  async getParticularTodoById(todo_id: number) {
    var response = await Api().get("/todos");
    return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
  },
};

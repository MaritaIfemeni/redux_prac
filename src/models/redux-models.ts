export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoArrayModel {
  all_todos: TodoModel[];
  particular_todo: TodoModel;
}

interface UpdateTodoAction {
  type: 'UPDATE_TODO';
  payload: {
    id: number;
    title: string;
  };
}

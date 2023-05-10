import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateTodo } from '../store/todo-actions';


function TodoItem(props: {id: number, title: string}) {
  const dispatch = useDispatch();

  function handleTitleChange(newTitle: string) {
    dispatch(UpdateTodo(props.id, newTitle));
  }

  return (
    <div>
      <input value={props.title} onChange={e => handleTitleChange(e.target.value)} />
    </div>
  );
}

export default TodoItem;

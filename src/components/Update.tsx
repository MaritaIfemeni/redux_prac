import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateTodo } from '../store/todo-actions';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../store/index';
import { TodoArrayModel } from '../models/redux-models';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;


function TodoItem(props: {id: number, title: string}) {
  const dispatch: AppDispatch = useDispatch();
  
 function handleTitleChange(newTitle: string) {
  dispatch((dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    return dispatch(UpdateTodo(props.id, newTitle));
  });
}

  // function handleTitleChange(newTitle: string) {
  //   dispatch(UpdateTodo(props.id, newTitle));
  // }

  return (
    <div>
      <input value={props.title} onChange={e => handleTitleChange(e.target.value)} />
    </div>
  );
}

export default TodoItem;

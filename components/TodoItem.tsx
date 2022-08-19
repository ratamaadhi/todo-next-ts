import React from 'react';
import { ITodo } from './Todos';

const TodoItem: React.FC<ITodo> = ({ todo, done, id }) => {
  return (
    <div
      key={id}
      className={`${
        done && 'line-through'
      } w-full px-2 py-1 bg-slate-700 text-slate-50 rounded-md`}
    >
      {todo}
    </div>
  );
};

export default TodoItem;

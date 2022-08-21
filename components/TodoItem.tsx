import React from 'react';
import { ITodo } from '../redux/features/todo/todoSlice';

interface Props extends ITodo {
  setDone?: (id: any) => {};
  deleteItem?: (id: any) => {};
}

const TodoItem: React.FC<Props> = ({ todo, done, id, setDone, deleteItem }) => {
  function handleContextMenu(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (id) deleteItem?.(id);
  }
  return (
    <div
      key={id}
      className={`${
        done && 'line-through'
      } w-full px-2 py-1 bg-slate-700 text-slate-50 rounded-md`}
      onClick={() => id && setDone?.(id)}
      onContextMenu={(e) => id && handleContextMenu(e)}
    >
      {todo}
    </div>
  );
};

export default TodoItem;

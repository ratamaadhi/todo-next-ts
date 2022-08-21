import React, { useState } from 'react';
import TodoItem from './TodoItem';

import {
  addTodo,
  deleteTodo,
  getTodos,
  setDone,
} from '../redux/features/todo/todoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Todos: React.FC = () => {
  const [todoInput, setTodoInput] = useState('');

  const { todos } = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  const handleEnterInputTodo = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && todoInput !== '') {
      dispatch(
        addTodo({
          id: `${Math.random() * 1000}`,
          todo: todoInput,
          done: false,
        })
      );
      setTodoInput('');
    }
  };
  return (
    <main className="container mx-auto min-h-screen pt-4 pb-4">
      <section className="w-full flex justify-center py-2 mb-4">
        <h1 className="w-min font-bold tracking-wide text-xl text-center text-slate-900 dark:text-slate-50 px-3 py-2 rounded-md shadow-md shadow-slate-50/10">
          TODOS
        </h1>
      </section>
      <section className="w-full">
        <div className="w-full flex justify-center mb-6 sticky top-0 z-10 bg-slate-50 dark:bg-slate-900 py-2">
          <input
            className="rounded-md px-2 py-1 text-sm w-full max-w-xs"
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyDown={handleEnterInputTodo}
          />
        </div>
        <div className="max-w-xs mx-auto space-y-3">
          {todos &&
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  setDone={(id) => dispatch(setDone(id))}
                  deleteItem={(id) => dispatch(deleteTodo(id))}
                  {...todo}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Todos;

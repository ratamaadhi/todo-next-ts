import type { NextPage } from 'next';
import Head from 'next/head';
import React, { Key, useEffect, useState } from 'react';

interface ITodo {
  id: Key;
  todo: String;
  done: Boolean;
}

const Home: NextPage = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    console.log('todoInput', todoInput);
    console.log('todos', todos);
  }, [todoInput, todos]);

  const handleEnterInputTodo = (e: React.KeyboardEvent<HTMLElement>) => {
    console.log('e', e);
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: `${Math.random() * 1000}`,
          todo: todoInput,
          done: false,
        },
      ]);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 antialiased font-poppins">
      <Head>
        <title>TODOS</title>
      </Head>
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
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={handleEnterInputTodo}
            />
          </div>
          <div className="max-w-xs mx-auto space-y-3">
            {todos &&
              todos.map((todo) => {
                return (
                  <div
                    key={todo.id}
                    className={`${
                      todo.done && 'line-through'
                    } w-full px-2 py-1 bg-slate-700 text-slate-50 rounded-md`}
                  >
                    {todo.todo}
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

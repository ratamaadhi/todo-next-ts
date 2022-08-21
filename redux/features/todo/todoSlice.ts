import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Key } from 'react';
import { RootState } from '../../store';

// Define a type for the slice state
export interface ITodo {
  id: Key;
  todo: String;
  done: Boolean;
}

interface ITodoState {
  todos: ITodo[];
}

const initialState: ITodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    setDone: (state, action) => {
      const { todos } = state;
      const id = action.payload;
      const newTodos: ITodo[] = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      state.todos = newTodos;
    },
    deleteTodo: (state, action) => {
      const { todos } = state;
      const id = action.payload;
      const newTodos = todos.filter((todo) => todo.id !== id);
      state.todos = newTodos;
    },
  },
});

export const { addTodo, setDone, deleteTodo } = todoSlice.actions;

export const getTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;

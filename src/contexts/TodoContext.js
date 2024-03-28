import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "this is basic todo",
      completed: false,
    },
  ],

  addtodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplere: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;

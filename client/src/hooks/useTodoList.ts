import { useState } from "react";

type Todo<C> = {
  id: number;
  text: string;
  done: boolean;
  category: C;
};

type Category = "shopping" | "learning" | "hobby";

type Todos = Todo<Category>[];

export function useTodoList() {
  const [todos, setTodos] = useState<Todos>([]);

  function addTodo(description: string, category: Category) {
    const newTodo: Todo<Category> = {
      id: Math.random(),
      text: description,
      category,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  return { todos, addTodo };
}

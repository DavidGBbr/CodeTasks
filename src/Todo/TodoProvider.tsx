import React, { createContext } from "react";
import { ITask } from "./Types";

export const TodoContext = createContext<{ activeTasks: ITask[] }>({
  activeTasks: [],
});

type Props = {
  children: React.ReactNode;
};

const TodoProvider = (props: Props) => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Primeira tarefa",
      isFav: true,
    },
    {
      id: "2",
      title: "Segunda tarefa",
      isFav: false,
    },
    {
      id: "3",
      title: "Terceira tarefa",
      isFav: true,
    },
  ];
  return (
    <TodoContext.Provider value={{ activeTasks: tasks }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

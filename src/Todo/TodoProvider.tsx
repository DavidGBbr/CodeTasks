import React, { createContext, useReducer } from "react";
import {
  ActionTypeEnum,
  IAddAction,
  IDeleteAction,
  IReducerAction,
  ITask,
  ITodoContext,
  ITodoState,
} from "./Types";
import { clone } from "../Utilities/clone";

export const TodoContext = createContext<ITodoContext>({
  activeTasks: [],
  dispatch: () => {},
});

type Props = {
  children: React.ReactNode;
};

const addTaskAction = (state: ITodoState, action: IAddAction) => {
  const { data } = action;
  data.id = new Date().toJSON();
  return [action.data, ...state.activeTasks];
};

const deleteTaskAction = (state: ITodoState, action: IDeleteAction) => {
  const activeTasks: ITask[] = clone(state.activeTasks);
  const filteredData = activeTasks.filter((task) => task.id !== action.data.id);
  return filteredData;
};

const reducer = (state: ITodoState, action: IReducerAction) => {
  switch (action.type) {
    case ActionTypeEnum.Add:
      return { ...state, activeTasks: addTaskAction(state, action) };
    case ActionTypeEnum.Delete:
      return { ...state, activeTasks: deleteTaskAction(state, action) };
  }
  return { ...state };
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

  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <TodoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

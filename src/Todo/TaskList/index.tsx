import React, { useContext } from "react";
import TaskListStyle from "./TaskList.style";
import {
  Checkbox,
  FontIcon,
  MessageBar,
  Stack,
  mergeStyles,
} from "@fluentui/react";
import { TodoContext } from "../TodoProvider";
import { ActionTypeEnum } from "../Types";
import TaskDescription from "./TaskDescription";

type Props = {
  setEditTask: (taskId: string) => void;
};

export const TaskList = ({ setEditTask }: Props) => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const onTaskDelete = (id: string) => {
    if (window.confirm("Tem certeza que você quer apagar a tarefa?")) {
      dispatch({ type: ActionTypeEnum.Delete, data: { id } });
    }
  };

  const onFavoriteClick = (id: string) => {
    dispatch({ type: ActionTypeEnum.ToggleFavorite, data: { id } });
  };

  const checkboxClickedHnd = (id: string) => {
    dispatch({ type: ActionTypeEnum.Completed, data: { id } });
  };
  return (
    <div>
      {activeTasks.length ? (
        activeTasks.map((task) => {
          return (
            <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
              <Stack horizontal style={{ width: "85%", alignItems: "center" }}>
                <Checkbox onChange={() => checkboxClickedHnd(task.id)} />
                {task.title}
              </Stack>
              <Stack horizontal style={{ width: "15%" }}>
                <TaskDescription task={task} />
                <FontIcon
                  iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"}
                  className={
                    task.isFav
                      ? mergeStyles(TaskListStyle.iconStyle, {
                          color: "#7c5de8",
                        })
                      : TaskListStyle.iconStyle
                  }
                  onClick={() => onFavoriteClick(task.id)}
                />
                <FontIcon
                  iconName="EditNote"
                  className={TaskListStyle.iconStyle}
                  onClick={() => {
                    setEditTask(task.id);
                  }}
                />
                <FontIcon
                  iconName="Delete"
                  className={TaskListStyle.iconStyle}
                  onClick={() => onTaskDelete(task.id)}
                />
              </Stack>
            </Stack>
          );
        })
      ) : (
        <MessageBar>Você não tem tarefas pendentes</MessageBar>
      )}
    </div>
  );
};

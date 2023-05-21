import {
  Checkbox,
  FontIcon,
  MessageBar,
  Stack,
  mergeStyles,
} from "@fluentui/react";
import React, { useContext } from "react";
import TaskDescription from "./TaskDescription";
import { TodoContext } from "../TodoProvider";
import TaskListStyle from "./TaskList.style";
import { ActionTypeEnum } from "../Types";

const CompletedTaskList = () => {
  const { completedTasks, dispatch } = useContext(TodoContext);
  const onTaskDelete = (id: string) => {
    if (window.confirm("Tem certeza que você quer apagar a tarefa?")) {
      dispatch({ type: ActionTypeEnum.DeleteCompletedTask, data: { id } });
    }
  };
  return (
    <div>
      {completedTasks.length ? (
        completedTasks.map((task) => {
          return (
            <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
              <Stack
                horizontal
                style={{ width: "85%", alignItems: "center" }}
                className={TaskListStyle.disabled}
              >
                <Checkbox disabled />
                <span className={TaskListStyle.disabled}>{task.title}</span>
              </Stack>
              <Stack horizontal style={{ width: "15%" }}>
                <TaskDescription task={task} />
                <FontIcon
                  iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"}
                  className={mergeStyles(
                    TaskListStyle.iconStyle,
                    TaskListStyle.disabled
                  )}
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
        <MessageBar>Você não possui tarefas completas</MessageBar>
      )}
    </div>
  );
};

export default CompletedTaskList;

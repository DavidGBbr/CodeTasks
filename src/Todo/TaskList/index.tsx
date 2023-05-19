import React, { useContext } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { TodoContext } from "../TodoProvider";
import { ActionTypeEnum } from "../Types";

export const TaskList = () => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const onTaskDelete = (id: string) => {
    if (window.confirm("Tem certeza que você quer apagar a tarefa?")) {
      dispatch({ type: ActionTypeEnum.Delete, data: { id } });
    }
  };
  return (
    <div>
      {activeTasks.map((task) => {
        return (
          <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
            <Stack horizontal style={{ width: "85%", alignItems: "center" }}>
              <Checkbox />
              {task.title}
            </Stack>
            <Stack horizontal style={{ width: "15%" }}>
              <FontIcon iconName="Info" className={TaskListStyle.iconStyle} />
              <FontIcon
                iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"}
                className={TaskListStyle.iconStyle}
              />
              <FontIcon
                iconName="EditNote"
                className={TaskListStyle.iconStyle}
              />
              <FontIcon
                iconName="Delete"
                className={TaskListStyle.iconStyle}
                onClick={() => onTaskDelete(task.id)}
              />
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
};

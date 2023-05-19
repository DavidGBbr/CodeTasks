import React from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";

interface ITask {
  id: string;
  title: string;
  isFav: boolean;
}

export const TaskList = () => {
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
  ];

  return (
    <div>
      {tasks.map((task) => {
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
              <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
};

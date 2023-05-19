import React, { useContext } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { TodoContext } from "../TodoProvider";

export const TaskList = () => {
  const { activeTasks } = useContext(TodoContext);

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
              <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
};

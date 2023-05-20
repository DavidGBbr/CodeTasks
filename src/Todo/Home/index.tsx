import React, { useState } from "react";
import HomeStyle from "./Home.style";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeysEnum } from "../Types";
import { TaskList } from "../TaskList";
import { initializeIcons } from "@fluentui/react";
import TodoProvider from "../TodoProvider";
import TaskForm from "../TaskForm";
import CompletedTaskList from "../TaskList/CompletedTaskList";
initializeIcons();

export const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const editTask = (id: string) => {
    setEditTaskId(id);
    setSelectedKey(PivotKeysEnum.TaskForm);
  };
  return (
    <Stack className={HomeStyle.todoContainer}>
      <TodoProvider>
        <header className={HomeStyle.headerStyle}>
          <h2>Code Tasks</h2>
        </header>

        <Stack className={HomeStyle.pivotContainer}>
          <Pivot
            selectedKey={selectedKey}
            styles={{ root: { display: "flex", justifyContent: "center" } }}
            onLinkClick={(item?: PivotItem) => {
              if (item?.props.itemKey !== PivotKeysEnum.TaskForm) {
                setEditTaskId(null);
              }
              setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
            }}
          >
            <PivotItem headerText="Tarefas" itemKey={PivotKeysEnum.Tasks}>
              <TaskList setEditTask={editTask} />
            </PivotItem>
            <PivotItem
              headerText="Add Nova Tarefa"
              itemKey={PivotKeysEnum.TaskForm}
            >
              <TaskForm editTaskId={editTaskId} />
            </PivotItem>
            <PivotItem
              headerText="Tarefas Completas"
              itemKey={PivotKeysEnum.Completed}
            >
              <CompletedTaskList />
            </PivotItem>
          </Pivot>
        </Stack>
      </TodoProvider>
    </Stack>
  );
};

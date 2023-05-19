import React, { useState } from "react";
import HomeStyle from "./Home.style";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeysEnum } from "../Types";
import { TaskList } from "../TaskList";
import { initializeIcons } from "@fluentui/react";
initializeIcons();

export const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);

  return (
    <Stack className={HomeStyle.todoContainer}>
      <header className={HomeStyle.headerStyle}>
        <h2>Code Tasks</h2>
      </header>

      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          selectedKey={selectedKey}
          styles={{ root: { display: "flex", justifyContent: "center" } }}
          onLinkClick={(item?: PivotItem) => {
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem headerText="Tarefas" itemKey={PivotKeysEnum.Tasks}>
            <TaskList />
          </PivotItem>
          <PivotItem
            headerText="Add Nova Tarefa"
            itemKey={PivotKeysEnum.TaskForm}
          >
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem
            headerText="Tarefas Completas"
            itemKey={PivotKeysEnum.Completed}
          >
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  );
};
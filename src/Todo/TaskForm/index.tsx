import { MessageBar, MessageBarType, Stack } from "@fluentui/react";
import FormStyle from "./TaskForm.style";
import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange =
    (setValue: any) =>
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value);
    };
  return (
    <Stack>
      <label className={FormStyle.taskLabel} htmlFor="title">
        Título da Tarefa
      </label>
      <input
        className={FormStyle.taskInput}
        type="text"
        id="title"
        value={title}
        onChange={handleChange(setTitle)}
      />
      <label className={FormStyle.taskLabel} htmlFor="description">
        Descrição da Tarefa
      </label>
      <textarea
        className={FormStyle.taskInput}
        id="description"
        rows={3}
        value={description}
        onChange={handleChange(setDescription)}
      />

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
        <Stack style={{ width: "80%" }}>
          <MessageBar messageBarType={MessageBarType.success}>
            Tarefa adicionada!
          </MessageBar>
        </Stack>
        <Stack style={{ width: "20%" }}>
          <button className={FormStyle.taskBtn}>Adicionar</button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskForm;

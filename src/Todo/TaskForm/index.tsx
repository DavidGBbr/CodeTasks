import { MessageBar, MessageBarType, Stack } from "@fluentui/react";
import FormStyle from "./TaskForm.style";
import useInput from "./useInput";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoProvider";
import { ActionTypeEnum, ITask } from "../Types";

const TaskForm = () => {
  const { dispatch } = useContext(TodoContext);

  const title = useInput("");
  const description = useInput("");
  const [showMessage, setShowMessage] = useState<{
    type: MessageBarType;
    message: string;
  }>({ type: MessageBarType.success, message: "" });

  useEffect(() => {
    if (showMessage.message) {
      setTimeout(() => {
        setShowMessage({ type: MessageBarType.success, message: "" });
      }, 1000);
    }
  }, [showMessage.message]);

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    const data: ITask = {
      id: "",
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: ActionTypeEnum.Add, data });
    setShowMessage({
      type: MessageBarType.success,
      message: "Tarefa adicionada!",
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label className={FormStyle.taskLabel} htmlFor="title">
        Título da Tarefa
      </label>
      <input
        className={FormStyle.taskInput}
        type="text"
        id="title"
        {...title}
      />
      <label className={FormStyle.taskLabel} htmlFor="description">
        Descrição da Tarefa
      </label>
      <textarea
        className={FormStyle.taskInput}
        id="description"
        rows={3}
        {...description}
      />

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
        <Stack style={{ width: "80%" }}>
          {showMessage.message && (
            <MessageBar messageBarType={MessageBarType.success}>
              Tarefa adicionada!
            </MessageBar>
          )}
        </Stack>
        <Stack style={{ width: "20%" }}>
          <button type="submit" className={FormStyle.taskBtn}>
            Adicionar
          </button>
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;

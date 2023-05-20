import { MessageBar, MessageBarType, Stack } from "@fluentui/react";
import FormStyle from "./TaskForm.style";
import useInput from "./useInput";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoProvider";
import { ActionTypeEnum, ITask } from "../Types";

type Props = {
  editTaskId: string | null;
};
const TaskForm = ({ editTaskId }: Props) => {
  const { activeTasks, dispatch } = useContext(TodoContext);

  const title = useInput("");
  const description = useInput("");

  useEffect(() => {
    if (editTaskId) {
      const taskData = activeTasks.find((task) => task.id === editTaskId);

      title.set(taskData?.title || "");
      description.set(taskData?.description || "");
    }
  }, [editTaskId]);

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

    const addTaskAction = () => {
      const data: ITask = {
        id: "",
        title: title.value,
        description: description.value,
        isFav: false,
      };
      dispatch({ type: ActionTypeEnum.Add, data });
      setShowMessage({
        type: MessageBarType.success,
        message: "Tarefa Adicionada!",
      });
      title.set("");
      description.set("");
    };

    const updateTaskAction = () => {
      const taskData = activeTasks.find((task) => task.id === editTaskId);
      if (taskData) {
        const data: ITask = {
          id: taskData.id || "",
          title: title.value,
          description: description.value,
          isFav: taskData.isFav || false,
        };
        dispatch({ type: ActionTypeEnum.Update, data });
        setShowMessage({
          type: MessageBarType.success,
          message: "Tarefa Atualizada!",
        });
      } else {
        setShowMessage({
          type: MessageBarType.error,
          message: "Erro na atualização!",
        });
      }
    };
    editTaskId ? updateTaskAction() : addTaskAction();
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
            {editTaskId ? "Atualizar" : "Adicionar"}
          </button>
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;

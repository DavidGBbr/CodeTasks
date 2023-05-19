export enum PivotKeysEnum {
  Tasks = "Tasks",
  TaskForm = "TaskForm",
  Completed = "CompletedTasks",
}

export interface ITask {
  id: string;
  title: string;
  isFav: boolean;
}

import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle {
  taskItem: IStyle;
  iconStyle: IStyle;
}

const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
  taskItem: {
    fontSize: 16,
    padding: "13px 24px",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#9266ff",
    color: "#fff",
    marginTop: 10,
    boxShadow: "0 4px 4px rgba(0,0,0, 0.25)",
    selectors: {
      "&:hover": { background: "#7c5de8" },
    },
  },
  iconStyle: {
    fontSize: 20,
    margin: "0 3px",
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
});

export default TaskListStyle;

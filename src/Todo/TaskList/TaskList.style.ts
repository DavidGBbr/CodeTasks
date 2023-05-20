import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle {
  taskItem: IStyle;
  iconStyle: IStyle;
  disabled: IStyle;
}

const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
  taskItem: {
    fontSize: 16,
    padding: "13px 24px",
    width: "100%",
    borderRadius: 10,
    border: "1px solid #9266ff",
    marginTop: 10,
    boxShadow: "0 4px 4px rgba(0,0,0, 0.25)",
    selectors: {
      "&:hover": { background: "#cfbfff" },
    },
  },
  iconStyle: {
    fontSize: 20,
    margin: "0 3px",
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
  disabled: {
    color: "gray",
    selectors: {
      "&:hover": { cursor: "default" },
    },
  },
});

export default TaskListStyle;

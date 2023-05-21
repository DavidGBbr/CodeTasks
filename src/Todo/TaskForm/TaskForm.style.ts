import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";

interface IFormStyle {
  taskLabel: IStyle;
  taskInput: IStyle;
  taskBtn: IStyle;
}

const FormStyle: IProcessedStyleSet<IFormStyle> = mergeStyleSets({
  taskLabel: {
    display: "block",
    fontSize: 16,
    padding: "0.5rem 0 ",
  },
  taskInput: {
    width: "calc(100% - 15px)",
    border: "1px solid #7c5de8",
    fontSize: 16,
    padding: "0.5rem",
    borderRadius: "0.4rem",
    cursor: "pointer",
    boxShadow: "0 4px 4px rgba(0,0,0, 0.25)",
    selectors: {
      "&:hover,&:focus": { outline: "none", boxShadow: "0 0 0 1px #9266ff" },
    },
  },
  taskBtn: {
    backgroundColor: "#7c5de8",
    border: "none",
    color: "#fff",
    borderRadius: 10,
    padding: 7,
    fontSize: 16,
    cursor: "pointer",
    selectors: {
      "&:hover": { boxShadow: "0 0 0 1px #9266ff" },
    },
  },
});

export default FormStyle;

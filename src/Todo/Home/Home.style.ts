import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";

interface IHomeStyle {
  todoContainer: IStyle;
  headerStyle: IStyle;
  pivotContainer: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  todoContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  headerStyle: {
    height: 85,
    backgroundColor: "#7c5de8",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
    fontSize: 21,
  },
  pivotContainer: {
    margin: 10,
  },
});

export default HomeStyle;

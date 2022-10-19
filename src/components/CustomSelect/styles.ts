import { StylesConfig } from "react-select";
import { IOption } from "../../types";
import { Color } from "../../ui/colors";

export const CustomStyles: StylesConfig<IOption> = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: Color.White,
    borderRadius: "30px",
    marginBottom: "45px",
    padding: "15px",
    position: "relative",
    border: "none",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    position: "absolute",
    top: "10px",
    right: "10px",
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
};

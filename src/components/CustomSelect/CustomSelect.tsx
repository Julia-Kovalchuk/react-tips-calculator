import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { CustomStyles } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface IProps {
  onChange: (tips: number) => void;
  value: number;
}

export const CustomSelect = ({ onChange, value }: IProps) => {
  const getTipsValue = () =>
    options.find((tips: IOption) => {
      return tips.value === value;
    });

  const handleTips = (tips: SingleValue<IOption>): void => {
    if (tips) onChange(tips.value);
  };

  return (
    <Select
      onChange={handleTips}
      value={getTipsValue()}
      options={options}
      styles={CustomStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};

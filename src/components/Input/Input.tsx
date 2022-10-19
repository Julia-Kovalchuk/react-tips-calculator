import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, onChange }: IProps) => {
  return (
    <StyledInput type="number" placeholder={placeholder} onChange={onChange} />
  );
};

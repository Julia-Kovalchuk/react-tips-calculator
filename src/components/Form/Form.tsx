import React, { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button/Button";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { Description, StyledForm, Title, Result } from "./styles";

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tipsValue, setTipsValue] = useState<number>(options[0].value);
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const total = (+bill.value * (100 + tipsValue)) / 100 / +persons.value;
    setTotal(total);
  };

  useEffect((): void => {
    if (bill.value && persons.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill.value, persons.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Description>Let's go calculate your tips</Description>
      <Input placeholder="Enter bill" {...bill} />
      <Input placeholder="Enter persons" {...persons} />
      <CustomSelect onChange={setTipsValue} value={tipsValue} />
      <Result>Total: {total.toFixed(2)}$</Result>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

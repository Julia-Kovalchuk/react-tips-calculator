import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

export const StyledButton = styled.button`
  color: ${Color.White};
  font-size: 24px;
  padding: 13px 0px;
  width: 100%;
  background: ${Color.Primary};
  border: none;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: ${Color.SecondaryDark};
  }

  &:active {
    background: ${Color.SecondaryLight};
  }

  &:disabled {
    background: ${Color.Primary};
    opacity: 0.5;
    cursor: default;
  }
`;

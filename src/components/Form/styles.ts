import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledForm = styled.form`
  max-width: 460px;
  margin: auto;

  ${Media.MD} {
    max-width: 331px;
  }
`;

const Title = styled.h2`
  margin-bottom: 45px;
  color: ${Color.Black};
  font-weight: 400;
  font-size: 40px;

  ${Media.MD} {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin-bottom: 45px;
  font-size: 32px;
  color: ${Color.GrayLight};

  ${Media.MD} {
    font-size: 24px;
  }
`;

const Result = styled.p`
  color: ${Color.Black};
  text-align: left;
  margin-bottom: 45px;
  font-weight: 500;
  font-size: 24px;

  ${Media.SM} {
    font-size: 18px;
  }
`;

export { StyledForm, Title, Description, Result };

import styled from "styled-components";
import { elevation, transition } from "components/utilities";

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  width: 320px;
  margin: 0 auto;
  text-align: center;
  ${elevation[4]};
  ${transition({
    property: "box-shadow"
  })};
  &:hover {
    ${elevation[5]};
  }
`;

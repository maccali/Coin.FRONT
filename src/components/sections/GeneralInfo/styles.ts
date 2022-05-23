import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
`;

export const GeneralInformationBlock = styled.div`
  display:  flex;

  & > * {
    margin-right: 20px;
  }
`
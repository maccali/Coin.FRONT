import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const GeneralInformationBlock = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  div {
    .flickity-viewport {
      height: 230px !important;
    }
  }
  /* width: 100vh; */
  /* & > * {
    margin-right: 20px;
  } */
`;

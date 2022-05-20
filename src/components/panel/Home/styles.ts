import styled from "styled-components";

export const BackBlock = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-template-areas: "menuLeft panel";
`;

export const BackBlockWhite = styled.div`
  display: grid;
  grid-area: panel;
  /* grid-template-columns: 
  ; */
  background: #eff2f9;
  border-radius: 30px;
  /* margin-top: 35px;
  margin-right: 35px;
  margin-bottom: 35px; */
`;

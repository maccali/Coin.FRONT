import styled from "styled-components";

export const BackBlock = styled.div`
  display: grid;
  grid-template-columns: 288px 1fr;
  grid-template-areas: "menuLeft panel";
`;

export const BackBlockWhite = styled.div`
  display: grid;
  grid-area: panel;
  grid-template-columns: 1fr 368px;
  grid-template-areas:
    "menuTop menuTop"
    "historyService historyService"
    "allPatients allPatients";
  background: #eff2f9;
  border-radius: 30px;

  .menuTop {
    grid-area: menuTop;
  }

  .historyService {
    grid-area: historyService;
    padding-left: 32px;
    padding-right: 32px;
  }

  .allPatients {
    grid-area: allPatients;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 32px;
  }
`;

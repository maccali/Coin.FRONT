import styled from "styled-components";

export const BackBlockWhite = styled.div`
  display: grid;
  grid-area: panel;
  grid-template-columns: 1fr 368px;
  grid-template-areas:
    "menuTop menuTop"
    "generalInfo generalInfo"
    "historyService moreTest"
    "importantNews importantNews";
  background: #eff2f9;
  border-radius: 30px;

  .menuTop {
    grid-area: menuTop;
  }

  .generalInfo {
    grid-area: generalInfo;
    padding-left: 32px;
    padding-right: 32px;
  }
  .historyService {
    grid-area: historyService;
    padding-left: 32px;
    padding-right: 32px;
  }
  .moreTest {
    grid-area: moreTest;
    padding-right: 32px;
  }
  .importantNews {
    grid-area: importantNews;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 32px;
  }
`;

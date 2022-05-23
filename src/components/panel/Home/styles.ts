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
  }
  .historyService {
    grid-area: historyService;
  }
  .moreTest {
    grid-area: moreTest;
  }
  .importantNews {
    grid-area: importantNews;
  }
`;

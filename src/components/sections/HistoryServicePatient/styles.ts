import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    display: flex;
    align-items: center;

    button {
      margin-left: 12px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 22px;
`;

export const HistoryServiceBlock = styled.div`
  display: flex;
  height: 320px;
  background: #ffffff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  padding-left: 16px;
  margin-bottom: 30px;
`;

import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 22px;
`;

export const ImportantNewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  border-radius: 6px;
`;

export const ImportantNewsBlockBack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
  padding-top: 16px;

  .header {
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: 230px 1fr 30px;
    /* justify-content: space-evenly; */

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      margin-right: 16px;
      color: rgba(86, 84, 104, 0.6);
    }
  }
`;

export const Search = styled.div`
  div {
    display: flex;
    align-items: center;
    height: 40px;
    width: 400px;

    input {
      position: absolute;
      height: 40px;
      width: calc(400px - 40px);
      background: #f5f5f5;
      border-radius: 5px;
      border: 0;
      padding-left: 37px;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
    }

    input::placeholder {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: rgba(44, 46, 61, 0.3);
    }

    img {
      position: relative;
      margin-left: 12.5px;
    }
  }
`;

export const Ellipses = styled.div`
  display: flex;
  /* flex-direction: column; */
  & > * {
    width: 6px;
    height: 6px;
    margin-left: 5px;
    border-radius: 50%;
    background: rgba(44, 46, 61, 0.5);
  }
`;

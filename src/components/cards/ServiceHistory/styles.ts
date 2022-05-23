import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 264px;
  height: 288px;
  border: 1px solid #edf1f8;
  border-radius: 6px;
  margin: 16px 8px;

  div.text {
    padding: 8px;
  }

  div p {
    font-family: "Open Sans";
    font-style: normal;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 8px;
  }

  div .textOne {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #303b5b;
  }

  div .textTwo {
    font-weight: 800;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    color: rgba(48, 59, 91, 0.3);
  }

  div .textTree {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #303b5b;
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    .back {
      position: absolute;
      width: 264px;
      height: 136px;
    }
    .front {
      position: relative;
      width: 264px;
      height: 136px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 60px;
        width: 60px;
      }
    }
  }
`;

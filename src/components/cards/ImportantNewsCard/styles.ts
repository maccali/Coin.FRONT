import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 496px;
  height: 128px !important;
  background: #ffffff;
  border-radius: 6px;
  margin-right: 16px;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 16px;
  }
`;

export const Info = styled.div`
  margin: 20px 16px 16px 0px;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Open Sans";
    font-style: normal;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 4px;
  }

  .textOne {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #303b5b;
  }

  .textTwo {
    font-weight: 800;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    color: rgba(48, 59, 91, 0.3);
  }

  .textThree {
    margin-bottom: 20px;
  }

  .textThree.green {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #1eac79;
  }

  .textThree.green b {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }

  .textThree.red {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ef0c35;
  }

  .textThree.red b {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
`;

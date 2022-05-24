import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-columns: 96px 300px 550px 1fr 360px;
  align-items: center;
  height: 96px;
  background: #ffffff;
  border: 1px solid #eff2f9;
  border-radius: 6px;
  margin-bottom: 4px;
  padding-right: 32px;

  .image {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: "Open Sans";
    font-style: normal;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .textOne {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #303b5b;
  }

  .textTwo {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    text-transform: uppercase;
    color: rgba(48, 59, 91, 0.3);
  }

  .textThree {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }

  .textThree.green {
    color: #1eac79;
  }
`;

export const TestsInfo = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #eff2f9;
    height: 100%;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    h5 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      letter-spacing: 1px;
      margin: 0;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin: 0;
    }
  }

  div:last-child {
    border-right: 1px solid #eff2f9;
  }

  div.green {
    color: #1eac79;
  }

  div.red {
    color: #ef0c35;
  }

  div.orange {
    color: #ff6b00;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  & > * {
    margin-left: 16px;
  }
`;

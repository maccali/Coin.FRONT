import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 368px;
  height: 200px;
  align-items: center;
  margin-right: 20px;
  margin-top: 50px;

  .tile {
    position: relative;
    display: flex;
    width: 200px;
    height: 80px;
    z-index: 1;
    top: -158px;
    left: 50px;
    background: transparent;
    box-shadow: 4px 4px 16px transparent;
    border-radius: 8px;
    transition: all 0.3s;
    padding: 16px;

    div {
      display: none;
    }

    div span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #303b5a;
      margin: 0;
    }

    div p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 33px;
      display: flex;
      align-items: center;
      margin: 0;
    }

    div p.true {
      color: #1cbf84;
    }

    div p.false {
      color: #eb0d35;
    }
  }

  &:hover .tile {
    position: relative;
    display: flex;
    width: 200px;
    height: 80px;
    z-index: 1;
    top: -158px;
    left: 50px;
    background: #ffffff;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  position: absolute;
  display: grid;
  width: 368px;
  height: 176px;
  background: #ffffff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;

  div {
  }
`;

export const CardBack = styled.div`
  top: 84px;
  position: relative;
  width: 296px;
  height: 172px;
  background: #ffffff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0px 24px;

  div {
    .signal {
      position: relative;
      top: -18px;
      left: -30px;
    }
  }
`;

export const Img = styled.img`
  width: 26px;
  height: 26px;
`;

export const Percent = styled.div`
  div {
    display: flex;
    justify-content: center;
    width: 56px;
    height: 24px;
    border-radius: 20px;
    color: #fff;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
  }

  div.green {
    background: #1cbf84;
  }
  div.red {
    background: #ef0c35;
  }
`;

export const Number = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 0;
`;

export const Legend = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0px 24px 24px 24px;
`;

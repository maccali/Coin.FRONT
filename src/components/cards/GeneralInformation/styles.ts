import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 368px;
  height: 200px;
  align-items: center;
  margin-right: 20px;
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
  top: 10px;
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
  font-size: 36px;
  font-weight: bold;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 0;
`;

export const Legend = styled.p`
  font-size: 16px;
  font-weight: lighter;
  padding: 0px 24px 24px 24px;
`;

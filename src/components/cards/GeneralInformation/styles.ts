import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 368px;
  height: 176px;
  align-items: center;
`;

export const Card = styled.div`
  position: absolute;
  display: grid;
  width: 368px;
  height: 176px;
  background: #ffffff;
  box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;
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

export const Header = styled.div``;

export const Img = styled.img``;

export const Percent = styled.div``;

export const Number = styled.h3``;

export const Legend = styled.p``;


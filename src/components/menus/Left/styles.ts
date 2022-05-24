import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  grid-area: menuLeft;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;

  .active {
    background-image: url("/arts/menuRect.png");
  }

  @media (max-width: 650px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Item = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-image 0.3s ease-out;
  text-decoration: none;
  width: 248px;
  height: 104px;

  p {
    padding-left: 23px;
    color: black;
    margin: 0;
    color: #fff;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
  &.active p {
    color: #111;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 30px 0px 0px 30px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 88px;
  margin-bottom: 20px;
`;

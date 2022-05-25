import styled from "styled-components";

export const Block = styled.div`
  display: grid;
  grid-template-areas: "menu tabs";
  grid-template-columns: 288px 1fr;

  .tabs {
    grid-area: tabs;
  }

  .menu {
    grid-area: menu;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  background-color: transparent;
  .active {
    background-image: url("/arts/menuRect.png");
    transition: all 0.3s;
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

  img {
    padding-left: 23px;
  }

  &.active img {
    filter: invert(100%);
  }

  p {
    color: black;
    margin: 0;
    color: #fff;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    padding-left: 16px;
  }

  &.active p {
    color: #111;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 88px;
  margin-bottom: 20px;

  img:last-child {
    margin-left: 8px;
    width: 158px;
    height: 20px;
  }
`;

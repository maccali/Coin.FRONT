import styled from "styled-components";

export const Block = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas: "search buttonIconConfig buttonIconBell buttonIconProfile buttonIconApp";
  grid-template-columns: 1fr 40px 40px 160px 40px;
  height: 88px;
  background: #ffffff;
  border-radius: 30px 30px 0px 0px;
  padding-right: 56px;
  padding-left: 32px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  input {
    position: absolute;
    width: 400px;
    height: 40px;
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

  img {
    position: relative;
    margin-left: 12.5px;
  }
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: 0;
`;

export const ButtonProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 56px;
  background: rgba(47, 68, 134, 0.05);
  border-radius: 50px;
  border: 0;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  padding-left: 10px;
  padding-right: 10px;
  color: rgba(86, 84, 104, 0.8);
`;
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
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 20px;
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
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: 0;

  .signal {
    position: absolute;
  }
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

  div.principal {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;

    img {
      margin-left: 16px;
    }
  }

  &:hover .dropdown-content {
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    flex-direction: column;
    width: 152px;
    height: 144px;
    margin-left: -16px;
    top: 51px;
  }

  &:hover .dropdown-content a {
    display: flex;
    justify-items: center;
    align-items: center;
    margin-left: 16px;
    width: 100%;
    height: 33%;
    border: none;
    background-color: transparent;
  }

  &:hover .dropdown-content a img {
    margin: 0;
    margin-right: 16px;
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: 368px;
  height: 320px;
  background: linear-gradient(
      42.45deg,
      #ffffff 13.8%,
      rgba(255, 255, 255, 0) 93.21%
    ),
    url(.jpg);
  border-radius: 6px;

  .image {
    display: flex;
    width: 100%;
    height: 170px !important;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;

    img {
      width: 94px;
      height: 94px;
    }
  }

  h5 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #303b5b;
    margin: 0;
    margin-bottom: 16px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 14px;
    color: rgba(48, 59, 91, 0.3);
    margin: 0;
    margin-bottom: 16px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .footer b {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    color: #303b5b;
    margin-right: 8px;
  }
`;

// <Card>
//         <div className='image'>
//           <img src={image} alt="" />
//         </div>
//         <h5>{type}</h5>
//         <p>Licenças Dsiponíveis</p>
//         <div className='footer'>
//           <b>{number}</b>
//           <Call name='COMPRAR MAIS ' />
//         </div>
//       </Card >

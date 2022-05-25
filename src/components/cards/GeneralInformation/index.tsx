import { Block, CardBack, Card, Header, Img, Percent, Number, Legend, Tile } from './styles';


import { computePosition } from "@floating-ui/dom";
import { useEffect } from 'react';



interface GeneralInformationCardInterfece {
  image: string
  imageSignal?: string
  percentNumber: number
  number: number
  legend: string
  tileLegend: string
  tilenumber: number
  numberGoods: boolean
}

export default function GeneralInformation({
  image,
  legend,
  tileLegend,
  percentNumber,
  number,
  tilenumber,
  imageSignal,
  numberGoods

}: GeneralInformationCardInterfece) {

  return (
    <>
      <Block>
        <CardBack />
        <div className='tile'>
          <div>
            <span >{tileLegend}</span>
            <p className={String(numberGoods)}>{tilenumber}</p>
          </div>
        </div >
        <Card id="reference">
          <Header>
            <div>
              <Img src={image} />
              <img src={imageSignal} className="signal" alt="" />
            </div>
            <Percent>
              {(percentNumber > 0) ?
                <div className='green'>{percentNumber}%</div>
                :
                <div className='red'>{percentNumber}%</div>
              }
            </Percent>
          </ Header>
          <Number>{number}</Number>
          <Legend>{legend}</Legend>
        </Card>
      </Block >
    </>
  )
}
import { Block, CardBack, Card, Header, Img, Percent, Number, Legend } from './styles';


import { computePosition } from "@floating-ui/dom";
import { useEffect } from 'react';



interface GeneralInformationCardInterfece {
  image: string
  percentNumber: number
  number: number
  legend: string
  tileLegend: string
  tilenumber: number
}

export default function GeneralInformation({
  image,
  legend,
  tileLegend,
  percentNumber,
  number,
  tilenumber
}: GeneralInformationCardInterfece) {

  return (
    <>
      <Block>
        <CardBack />

        <Card id="reference">
          <Header>
            <Img src={image} />
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
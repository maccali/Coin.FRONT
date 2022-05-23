import { Block, CardBack, Card, Header, Img, Percent, Number, Legend } from './styles';

interface GeneralInformationCardInterfece {
  image: string
  percentNumber: number
  number: number
  legend: string
}

export default function GeneralInformation({
  image,
  legend,
  percentNumber,
  number
}: GeneralInformationCardInterfece) {
  return (
    <>
      <Block>
        <CardBack />
        <Card>
          <Header>
            <Img src={image} />
            <Percent>
              {(percentNumber > 0) ?
                <div className='green'>{percentNumber}</div>
                :
                <div className='red'>{percentNumber}</div>
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